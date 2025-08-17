import styles from "./About.module.css";

const About = () => {
    return (
        <section id="about" aria-labelledby="about-section" className={styles.about}>
            <div className={styles.bio}>
                <h1>About Me</h1>
                <p>I merge the elegance of design with the rigor of software engineering to craft digital products that leave a lasting impression. With a solid foundation in Java and TypeScript, and hands-on experience using frameworks like React, Angular, and Spring Boot, I build web solutions that are not only technically robust but also seamless and enjoyable to use.</p>
                <p>I believe that great software goes beyond functionality—it should feel intuitive, responsive, and tailored to the needs of its users. That’s why I place a strong emphasis on user experience at every stage of development, translating abstract concepts into interfaces that are both beautiful and meaningful. My goal is to bridge the gap between form and function, ensuring that every product I work on doesn’t just work well, but feels right to the people who use it.</p>
            </div>
            <div className={styles.lists}>
                <div className="list">
                    <h5>Education</h5>
                    <br />
                    <ul>
                        <li>
                            <span className={styles.date}>2024 - 2025</span>
                            <span className={styles.institution}>Dev Senior SAS</span>
                            <span className={styles.degree}>Java 0 To Senior AI</span>
                        </li>
                        <li>
                            <span className={styles.date}>2023 - 2026</span>
                            <span className={styles.institution}>Corporación Universitaría Iberoamericana</span>
                            <span className={styles.degree}>Software Engineering</span>
                        </li>
                        <li>
                            <span className={styles.date}>2022 - 2023</span>
                            <span className={styles.institution}>Servicio Nacional de Aprendizaje</span>
                            <span className={styles.degree}>Analysis and Development of Software</span>
                        </li>
                    </ul>
                </div>
                <div className="list">
                    <h5>Courses</h5>
                    <br />
                    <ul>
                        <li>
                            <span className={styles.date}>2025</span>
                            <span className={styles.institution}>Politécnico de Colombia</span>
                            <span className={styles.degree}>Diploma in Java Programing</span>
                        </li>
                        <li>
                            <span className={styles.date}>2022</span>
                            <span className={styles.institution}>Sericio Nacional de Aprendizaje</span>
                            <span className={styles.degree}>Conceptualization of C++</span>
                        </li>
                        <li>
                            <span className={styles.date}>2020</span>
                            <span className={styles.institution}>Sericio Nacional de Aprendizaje</span>
                            <span className={styles.degree}>Computer Architecture</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default About;