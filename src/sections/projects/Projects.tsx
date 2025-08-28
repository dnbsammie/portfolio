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
                <div className={styles.scroll_section} ref={scrollRef}>
                    <div className={styles.left}>
                        <div className={styles.split}>
                            <h2>Design <br /> Build <br /> Evolve</h2>
                            <p>Each project I develop is an opportunity to learn,
                                improve, and leave a tangible mark. It's not just about writing code,
                                but about understanding the problem, designing with intention,
                                and building with precision.
                                These works reflect my commitment to constant improvement
                                and to creating solutions that truly work, connect, and evolve.</p>
                        </div>
                    </div>
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className={styles.project}
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
                    <div className={styles.right}>
                        <div className={styles.split}>
                            <h3>They are not just projects, they are experiences that matter.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
