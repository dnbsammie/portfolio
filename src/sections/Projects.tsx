import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/sections/Projects.css";

const Projects = () => {

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll<HTMLElement>(".sticky").forEach(section => {
                const offsetTop = section.parentElement?.offsetTop || 0;
                const scrollSection = section.querySelector<HTMLElement>(".scroll_section");
                if (!scrollSection) return;
                let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
                percentage = Math.min(Math.max(percentage, 0), 300);
                scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const projects = [
        {
            video: "/videos/project_1.mp4",
            title: "Java Project",
            description: "Desktop App.",
            link: "https://www.youtube.com/embed/ehdGa7BRwd4"
        },
        {
            video: "/videos/project_2.mp4",
            title: "Java + Gradle",
            description: "Sistema de Inventario",
            link: "https://www.youtube.com/embed/y42wtxylmFY"
        },
        {
            video: "/videos/project_3.mp4",
            title: "C++ Audio",
            description: "Plugin VST",
            link: "https://openai.com/es-419/research/index/"
        },
        {
            video: "/videos/project_4.mp4",
            title: "C# Game",
            description: "Unity Game",
            link: "#"
        }
    ];

    return (
        <section className="projects" id="projects" aria-labelledby="projects-section">
            <div className="sticky">
                <div className="scroll_section">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
