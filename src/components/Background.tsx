import { useBackgroundCanvas } from "../hooks/useBackgroundCanvas";

const Background = () => {
    const canvasRef = useBackgroundCanvas();
    return <canvas ref={canvasRef} className="background_canvas" />;
};

export default Background;
