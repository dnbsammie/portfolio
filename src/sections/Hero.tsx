import "../styles/sections/Hero.css";

const Hero = () => {
    return (
        <section className="hero" id="hero" aria-labelledby="hero-section">
            <div className="hero_title">
                <small>more than code</small>
                <h1>SAMUEL RIVERA</h1>
                <h6>SOFTWARE DEVELOPER</h6>
            </div>
            <div className="sub_title">
                <p className="advice">Avaliable for freelance work!</p>
                <div className="socials">
                    <a href="mailto:seriveramosq@gmail.com" className="fa-solid fa-paper-plane" aria-label="email"></a>
                    <a href="https://www.linkedin.com/in/seriveramosq" className="fa-brands fa-linkedin-in" target="_blank" aria-label="linkedin"></a>
                    <a href="https://github.com/dnbsammie" className="fa-brands fa-github" target="_blank" aria-label="github"></a>
                    <a href="https://codepen.io/dnbsammie" className="fa-brands fa-codepen" target="_blank" aria-label="codepen"></a>
                    <a href="https://www.youtube.com/@dnbsammie" className="fa-brands fa-youtube" target="_blank" aria-label="youtube"></a>
                    {/* <a href="#" className="fa-brands fa-spotify" target="_blank" aria-label="spotify"></a>
                        <a href="#" className="fa-brands fa-soundcloud" target="_blank" aria-label="soundcloud"></a> */}
                </div>
            </div>

        </section>
    )
}
export default Hero;