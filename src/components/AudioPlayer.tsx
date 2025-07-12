import { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
    src: string;
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((err) => {
                console.warn("Reproduction blocked by the browser", err);
            });
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const playOnLoad = () => {
            if (audioRef.current) {
                audioRef.current.volume = 0.4;
                audioRef.current.play().catch(() => { });
                setIsPlaying(true);
            }
        };
        playOnLoad();
    }, []);

    return (
        <div className="audio-toggle" onClick={toggleAudio}>
            <div className={`bar ${isPlaying ? "animate" : ""}`} />
            <div className={`bar ${isPlaying ? "animate" : ""}`} />
            <div className={`bar ${isPlaying ? "animate" : ""}`} />
            <div className={`bar ${isPlaying ? "animate" : ""}`} />
            <div className={`bar ${isPlaying ? "animate" : ""}`} />
            <audio ref={audioRef} src={src} loop />
        </div>
    );
}
