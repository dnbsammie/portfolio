import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "../styles/components/VideoModal.css";

interface VideoModalProps {
    videoUrl: string;
    onClose: () => void;
}

const isValidYouTubeEmbed = (url: string): boolean =>
    /^https:\/\/www\.youtube\.com\/embed\/[\w-]{11}$/.test(url);

const VideoModal = ({ videoUrl, onClose }: VideoModalProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isValidYouTubeEmbed(videoUrl)) {
            window.open(videoUrl, "_blank", "noopener noreferrer");
            onClose();
        }
    }, [videoUrl, onClose]);

    const handleClose = () => {
        setIsClosing(true);
        document.body.style.overflow = "";
        setTimeout(onClose, 300);
    };

    return createPortal(
        <div
            className={`video-modal ${isClosing ? "closing" : "show"}`}
            onClick={handleClose}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="video-container">
                    {isLoading && (
                        <div className="video-loading">
                            <span className="loader"></span>
                            <p>Cargando video...</p>
                        </div>
                    )}
                    {!hasError && (
                        <iframe
                            src={videoUrl}
                            title="Project Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            loading="lazy"
                            onLoad={() => setIsLoading(false)}
                            onError={() => {
                                setHasError(true);
                                setIsLoading(false);
                            }}
                            style={{ display: isLoading ? "none" : "block" }}
                        />
                    )}
                    {hasError && (
                        <div className="video-fallback">
                            <h2>No se pudo cargar el video</h2>
                            <p>Por favor, intenta más tarde.</p>
                        </div>
                    )}
                </div>
                <a
                    href="#"
                    className="button fill-button close-modal"
                    onClick={(e) => {
                        e.preventDefault();
                        handleClose();
                    }}
                >
                    Cerrar
                </a>
            </div>
        </div>,
        document.body
    );
};

export { VideoModal };
