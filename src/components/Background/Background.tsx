import { useEffect, useRef } from "react";
import * as THREE from "three";
import vertexShader from "./shaders/vertex.glsl?raw";
import fluidShader from "./shaders/fluid.glsl?raw";
import displayShader from "./shaders/display.glsl?raw";
import config from "./config";

export default function Background() {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;
        let isTabActive = true;

        const width = window.innerWidth;
        const height = window.innerHeight;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));

        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const targetOptions = {
            minFilter: THREE.LinearFilter,
            magFilter: THREE.LinearFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType,
            stencilBuffer: false,
            depthBuffer: false,
        };
        const fluidTarget1 = new THREE.WebGLRenderTarget(width, height, targetOptions);
        const fluidTarget2 = fluidTarget1.clone();
        let currentTarget = fluidTarget1;
        let previousTarget = fluidTarget2;

        let frameCount = 0;

        const fluidMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader: fluidShader,
            uniforms: {
                iTime: { value: 0 },
                iResolution: { value: new THREE.Vector2(width, height) },
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

        const geometry = new THREE.PlaneGeometry(2, 2);
        const fluidMesh = new THREE.Mesh(geometry, fluidMaterial);
        const displayMesh = new THREE.Mesh(geometry, displayMaterial);

        const container = canvasRef.current;
        if (container) {
            container.appendChild(renderer.domElement);
        }

        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const w = window.innerWidth;
                const h = window.innerHeight;
                renderer.setSize(w, h);
                fluidMaterial.uniforms.iResolution.value.set(w, h);
                displayMaterial.uniforms.iResolution.value.set(w, h);
                fluidTarget1.setSize(w, h);
                fluidTarget2.setSize(w, h);
                frameCount = 0;
            }, 150);
        };
        window.addEventListener("resize", handleResize);

        const handleVisibilityChange = () => {
            isTabActive = !document.hidden;
            if (isTabActive) {
                render();
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);

        const render = () => {
            if (!isTabActive) return;
            animationFrameId = requestAnimationFrame(render);

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
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            clearTimeout(resizeTimeout);

            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }

            renderer.dispose();
            fluidTarget1.dispose();
            fluidTarget2.dispose();
            fluidMaterial.dispose();
            displayMaterial.dispose();
            geometry.dispose();
        };
    }, []);

    return <div className="backgroundCanvas" ref={canvasRef} />;
}