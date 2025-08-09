import { useEffect, useRef } from "react";
import { projectsData } from "./projectsData";
import styles from "./Projects.module.css";

const Projects = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !scrollRef.current) return;

            const offsetTop = sectionRef.current.offsetTop;
            const scrollY = window.scrollY;
            const percentage = Math.min(Math.max(((scrollY - offsetTop) / window.innerHeight) * 100, 0), 500);
            scrollRef.current.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className={styles.projects}
            id="projects"
            ref={sectionRef}
            aria-labelledby="projects-section">
            <div className={styles.sticky}>
                {/* <canvas className={styles.outline_layer}></canvas> */}
                <div className={styles.title}>
                    <h1>projects</h1>
                </div>
                <div className={styles.scroll_section} ref={scrollRef}>
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className={`${styles.project} ${styles[project.orientation]}`}
                        >
                            <img src={project.img} alt={project.title} loading="lazy" />
                            <div className={styles.projectTitle}>{project.title}</div>
                            <div className={styles.links}>
                                {project.links.map((link, idx) => (
                                    <a
                                        key={idx}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={link.label}
                                    >
                                        <i className={link.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
