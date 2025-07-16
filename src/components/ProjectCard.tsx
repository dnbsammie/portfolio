import { useState } from "react";
import { VideoModal } from "./VideoModal";
import "../styles/components/ProjectCard.css";

interface ProjectCardProps {
    video: string;
    title: string;
    description: string;
    link: string;
}

const isYouTubeEmbed = (url: string): boolean =>
    url.startsWith("https://www.youtube.com/embed/");

const ProjectCard = ({ video, title, description, link }: ProjectCardProps) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleClick = () => {
        if (isYouTubeEmbed(link)) {
            setModalOpen(true);
            document.body.style.overflow = "hidden";
        } else {
            window.open(link, "_blank", "noopener noreferrer");
        }
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "";
    };

    return (
        <>
            <div className="project" onClick={handleClick}>
                <video
                    className="project-video"
                    src={video}
                    muted
                    loop
                    autoPlay
                    playsInline
                />
                <div className="project-overlay">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
            {modalOpen && <VideoModal videoUrl={link} onClose={closeModal} />}
        </>
    );
};

export default ProjectCard;
