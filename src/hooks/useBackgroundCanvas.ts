import { useEffect, useRef } from "react";

interface Vector2D {
    x: number;
    y: number;
}

interface Particle {
    origin: Vector2D;
    coordinates: Vector2D;
    velocity: Vector2D;
    radius: number;
    color: string;
    update: (
        canvas: HTMLCanvasElement,
        mouse?: Vector2D | null
    ) => void;
    draw: (
        ctx: CanvasRenderingContext2D,
        mouse?: Vector2D | null
    ) => void;
}

export function useBackgroundCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef<Vector2D | null>(null);

    class ParticleImpl implements Particle {
        origin: Vector2D;
        coordinates: Vector2D;
        velocity: Vector2D;
        radius: number;
        color: string;

        constructor(x: number, y: number) {
            this.origin = { x, y };
            this.coordinates = { x, y };
            this.velocity = { x: 0, y: 0 };
            this.radius = 2;
            this.color = "#dcdcdc";
        }

        update(canvas: HTMLCanvasElement, mouse?: Vector2D | null) {
            const { x, y } = this.coordinates;

            // Volver al punto original
            const dx = this.origin.x - x;
            const dy = this.origin.y - y;
            this.velocity.x += dx * 0.01;
            this.velocity.y += dy * 0.01;

            if (mouse) {
                const dist = Math.hypot(mouse.x - x, mouse.y - y);
                if (dist < 100) {
                    const angle = Math.atan2(mouse.y - y, mouse.x - x);
                    this.velocity.x += Math.cos(angle) * 0.5;
                    this.velocity.y += Math.sin(angle) * 0.5;
                    this.color = "#ff613d";
                } else {
                    this.color = "#dcdcdc";
                }
            } else {
                this.color = "#dcdcdc";
            }

            // Fricción
            this.velocity.x *= 0.9;
            this.velocity.y *= 0.9;

            this.coordinates.x += this.velocity.x;
            this.coordinates.y += this.velocity.y;

            // Evita que se salga del canvas
            if (this.coordinates.x <= 0 || this.coordinates.x >= canvas.width)
                this.velocity.x *= -1;
            if (this.coordinates.y <= 0 || this.coordinates.y >= canvas.height)
                this.velocity.y *= -1;
        }

        draw(ctx: CanvasRenderingContext2D, mouse?: Vector2D | null) {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.coordinates.x, this.coordinates.y, this.radius, 0, Math.PI * 2);
            ctx.fill();

            // Línea al mouse
            if (mouse) {
                const dist = Math.hypot(mouse.x - this.coordinates.x, mouse.y - this.coordinates.y);
                if (dist < 100) {
                    ctx.strokeStyle = "rgba(255,255,255,0.1)";
                    ctx.beginPath();
                    ctx.moveTo(this.coordinates.x, this.coordinates.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let animationId: number;

        const setDimensions = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = "100vw";
            canvas.style.height = "100vh";

            const spacing = 50;
            const margin = spacing / 2;
            const cols = Math.floor(canvas.width / spacing);
            const rows = Math.floor(canvas.height / spacing);

            const particles: Particle[] = [];

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    particles.push(new ParticleImpl(x * spacing + margin, y * spacing + margin));
                }
            }

            particlesRef.current = particles;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const p of particlesRef.current) {
                p.update(canvas, mouseRef.current);
                p.draw(ctx, mouseRef.current);
            }
            animationId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent | TouchEvent) => {
            const rect = canvas.getBoundingClientRect();
            let clientX: number, clientY: number;

            if (e instanceof MouseEvent) {
                clientX = e.clientX;
                clientY = e.clientY;
            } else {
                const touch = e.touches[0];
                clientX = touch.clientX;
                clientY = touch.clientY;
            }

            mouseRef.current = {
                x: (clientX - rect.left) * (canvas.width / rect.width),
                y: (clientY - rect.top) * (canvas.height / rect.height),
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = null;
        };

        setDimensions();
        animate();

        window.addEventListener("resize", setDimensions);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("touchmove", handleMouseMove, { passive: true });
        window.addEventListener("touchend", handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", setDimensions);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("touchmove", handleMouseMove);
            window.removeEventListener("touchend", handleMouseLeave);
        };
    }, []);

    return canvasRef;
}
