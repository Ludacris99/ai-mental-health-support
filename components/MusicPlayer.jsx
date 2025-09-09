import { useState, useRef } from "react";

export default function MusicPlayer() {
    const tracks = [
        { title: "Soothing Guitar", src: "/music/guitar.mp3" },
        { title: "Upbeat Track", src: "/music/upbeat.mp3" },
        { title: "Lofi Beat", src: "/music/lofi.mp3" },
    ];

    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        const newIndex = (currentTrack + 1) % tracks.length;
        setCurrentTrack(newIndex);
        audioRef.current.load();
        audioRef.current.play();
    };

    const prevTrack = () => {
        const newIndex = (currentTrack - 1 + tracks.length) % tracks.length;
        setCurrentTrack(newIndex);
        audioRef.current.load();
        audioRef.current.play();
    };

    return (
        <div className="p-4 rounded-2xl w-70 flex flex-col items-center bg-[#161616]">

            <div className="flex items-center justify-center w-fit gap-1 mb-2">
                <div><img src="/musicIcon.svg" alt="musicIcon" height={20} width={20} /></div>
                <div><h2 className="text-lg font-semibold text-blue-400">Set the Vibe </h2></div>
            </div>

            {/* Track Title */}
            <div className="mb-2 text-white">{tracks[currentTrack].title}</div>

            {/* Audio element */}
            <audio ref={audioRef} loop>
                <source src={tracks[currentTrack].src} type="audio/mpeg" />
            </audio>

            {/* Controls */}
            <div className="space-x-4">
                <button onClick={prevTrack} className="hover:cursor-pointer">
                    <img src="/prevSong.svg" alt="previous" height={30} width={30} />
                </button>

                <button onClick={togglePlay} className="text-4xl hover:cursor-pointer">
                    {isPlaying ? <img src="/pause.svg" alt="pause" height={30} width={30} />
                        : <img src="/play.svg" alt="play" height={30} width={30} />}
                </button>

                <button onClick={nextTrack} className="hover:cursor-pointer">
                    <img src="/nextSong.svg" alt="next" height={30} width={30} />
                </button>
            </div>
        </div>
    );
}
