// import { useEffect, useRef, useState } from 'react';
// import styles from './Navbar.module.css';

// interface AudioPlayerProps {
//     src: string;
// }

// const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
//     const audioRef = useRef<HTMLAudioElement>(null);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const toggleAudio = () => {
//         if (!audioRef.current) return;
//         if (isPlaying) {
//             audioRef.current.pause();
//         } else {
//             audioRef.current.play().catch(err => {
//                 console.warn('Reproducción bloqueada por el navegador', err);
//             });
//         }
//         setIsPlaying(!isPlaying);
//     };

//     useEffect(() => {
//         const playOnLoad = () => {
//             if (audioRef.current) {
//                 audioRef.current.volume = 0.4;
//                 audioRef.current.play().catch(() => { });
//                 setIsPlaying(true);
//             }
//         };
//     }, []);

//     return (
//         <button className={styles.audioToggle} onClick={toggleAudio} aria-label={isPlaying ? 'Pause audio' : 'Play audio'}>
//             <div className={`${styles.bar} ${isPlaying ? styles.animate : ''}`} />
//             <div className={`${styles.bar} ${isPlaying ? styles.animate : ''}`} />
//             <div className={`${styles.bar} ${isPlaying ? styles.animate : ''}`} />
//             <div className={`${styles.bar} ${isPlaying ? styles.animate : ''}`} />
//             <div className={`${styles.bar} ${isPlaying ? styles.animate : ''}`} />
//             <audio ref={audioRef} src={src} loop />
//         </button>
//     );
// };

// export default AudioPlayer;