import AudioPlayer from "./AudioPlayer";
import "../styles/components/Header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo"><a href="./">SR</a></div>
                <AudioPlayer src="#" />
            </nav>
        </header>
    )
}

export default Header