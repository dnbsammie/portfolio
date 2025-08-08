import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./VideoModal.css";

interface VideoModalProps {
    videoUrl: string;
    onClose: () => void;
}

const VideoModal = ({ videoUrl, onClose }: VideoModalProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!videoUrl) {
            setHasError(true);
            setIsLoading(false);
        }
    }, [videoUrl]);

    return createPortal(
        <div className="video-modal show" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="video-container">
                    {isLoading && (
                        <div className="video-loading">
                            <span className="loader"></span>
                            <p>Loading...</p>
                        </div>
                    )}
                    {!hasError && (
                        <iframe
                            src={videoUrl}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            onLoad={() => setIsLoading(false)}
                            onError={() => {
                                setHasError(true);
                                setIsLoading(false);
                            }}
                            style={{ display: isLoading ? "none" : "block" }}
                            title="Project Video"
                        />
                    )}
                    {hasError && (
                        <div className="video-fallback">
                            <h2>The video could not be loaded.</h2>
                            <p>Please try again later.</p>
                        </div>
                    )}
                </div>
                <a href="#" className="button fill-button close-modal" onClick={(e) => {
                    e.preventDefault();
                    onClose();
                }}>
                    Close
                </a>
            </div>
        </div>,
        document.body
    );
};

interface VideoTriggerProps {
    videoId: string;
    label?: string;
}

const VideoTrigger = ({ videoId, label = "VIDEO" }: VideoTriggerProps) => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (e: React.MouseEvent) => {
        e.preventDefault();
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "";
    };

    const videoUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : "";

    return (
        <>
            <a href="#" className="button" onClick={openModal}>
                {label}
            </a>
            {modalOpen && (
                <VideoModal videoUrl={videoUrl} onClose={closeModal} />
            )}
        </>
    );
};

export { VideoModal, VideoTrigger };
