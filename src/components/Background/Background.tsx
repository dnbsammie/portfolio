import { useEffect, useRef } from "react";
import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl?raw";
import fluidShader from "./shaders/fluid.glsl?raw";
import displayShader from "./shaders/display.glsl?raw";
import config from "./config";

const fpsTarget = 30;
const maxPixelRatio = 1.5;
const lowResScale = 0.75;
const useHalfFloat = true;
const resizeDebounce = 150;
const adaptiveFallback = true;

const sharedGeometry = new THREE.PlaneGeometry(2, 2);

export default function Background() {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;
        let resizeTimeout: NodeJS.Timeout;
        let isTabActive = true;
        let isInViewport = true;
        let lastTime = 0;
        let frameCount = 0;
        let pixelRatio = Math.min(window.devicePixelRatio, maxPixelRatio);
        let mounted = true;

        const width = window.innerWidth;
        const height = window.innerHeight;
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(width, height);
        renderer.setPixelRatio(pixelRatio);

        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const targetOptions = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            type: useHalfFloat ? THREE.HalfFloatType : THREE.FloatType,
            stencilBuffer: false,
            depthBuffer: false,
        };

        const lowW = Math.floor(width * lowResScale);
        const lowH = Math.floor(height * lowResScale);
        const fluidTarget1 = new THREE.WebGLRenderTarget(lowW, lowH, targetOptions);
        const fluidTarget2 = fluidTarget1.clone();
        let currentTarget = fluidTarget1;
        let previousTarget = fluidTarget2;

        const fluidMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader: fluidShader,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(lowW, lowH) },
                iFrame: { value: 0 },
                iPreviousFrame: { value: previousTarget.texture },
                uFluidDecay: { value: config.fluidDecay },
                uTrailLength: { value: config.trailLength },
            },
        });

        const displayMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader: displayShader,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(width, height) },
                iFluid: { value: currentTarget.texture },
                uDistortionAmount: { value: config.distortionAmount },
                uColor1: { value: config.color1 },
                uColor2: { value: config.color2 },
                uColor3: { value: config.color3 },
                uColor4: { value: config.color4 },
                uColorIntensity: { value: config.colorIntensity },
                uSoftness: { value: config.softness },
            },
        });

        const fluidMesh = new THREE.Mesh(sharedGeometry, fluidMaterial);
        const displayMesh = new THREE.Mesh(sharedGeometry, displayMaterial);
        const container = canvasRef.current;
        if (container) { container.appendChild(renderer.domElement); }

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (!mounted || !canvasRef.current) return;
                const w = window.innerWidth;
                const h = window.innerHeight;
                const lowWn = Math.floor(w * lowResScale);
                const lowHn = Math.floor(h * lowResScale);

                renderer.setSize(w, h);
                fluidMaterial.uniforms.iResolution.value.set(lowWn, lowHn);
                displayMaterial.uniforms.iResolution.value.set(w, h);
                fluidTarget1.setSize(lowWn, lowHn);
                fluidTarget2.setSize(lowWn, lowHn);
                frameCount = 0;
            }, resizeDebounce);
        };
        window.addEventListener("resize", handleResize);

        const handleVisibilityChange = () => {
            isTabActive = !document.hidden;
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);

        const observer = new IntersectionObserver(([entry]) => {
            isInViewport = entry.isIntersecting;
        });
        if (container) observer.observe(container);

        let frameTimes: number[] = [];
        const render = (time: number) => {
            if (!mounted) return;
            animationFrameId = requestAnimationFrame(render);

            if (!isTabActive || !isInViewport) return;

            const delta = time - lastTime;
            if (delta < 1000 / fpsTarget) return;
            lastTime = time;

            const now = performance.now() * 0.001;

            fluidMaterial.uniforms.iTime.value = now;
            fluidMaterial.uniforms.iFrame.value = frameCount;
            fluidMaterial.uniforms.iPreviousFrame.value = previousTarget.texture;

            displayMaterial.uniforms.iTime.value = now;
            displayMaterial.uniforms.iFluid.value = currentTarget.texture;

            renderer.setRenderTarget(currentTarget);
            renderer.render(fluidMesh, camera);

            renderer.setRenderTarget(null);
            renderer.render(displayMesh, camera);

            [currentTarget, previousTarget] = [previousTarget, currentTarget];
            frameCount++;

            if (adaptiveFallback) {
                const frameTime = delta;
                frameTimes.push(frameTime);
                if (frameTimes.length > 60) {
                    const avg = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
                    frameTimes = [];
                    if (avg > 35 && pixelRatio > 1) {
                        pixelRatio = Math.max(1, pixelRatio - 0.25);
                        renderer.setPixelRatio(pixelRatio);
                    }
                }
            }
        };

        render(0);

        return () => {
            mounted = false;
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            observer.disconnect();

            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }

            renderer.dispose();
            fluidTarget1.dispose();
            fluidTarget2.dispose();
            fluidMaterial.dispose();
            displayMaterial.dispose();
        };
    }, []);
    return <div className="backgroundCanvas" ref={canvasRef} arial-hidden="true" />;
}