import styles from "./About.module.css";

const About = () => {
    return (
        <section id="about" aria-labelledby="about-section" className={styles.about}>
            <div className={styles.left}>
                <div className={styles.split}>
                    <h2>Where Function meets Emotion</h2>
                    <p>Every line of code I write comes from curiosity, the need to solve real problems, and the constant desire to learn. As a developer, I am dedicated to building functional and aesthetic solutions that add value. I am guided by both technical efficiency and empathy towards the user, always seeking to bridge the gap between form and function to create products that leave a lasting impression.</p>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.split}>
                    <h1 className="vertical_text">About</h1>
                </div>
            </div>
        </section>
    )
}
export default About;