'use client'
import { useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveTrack = () => {

    useEffect(() => {
        const element = document.getElementById("Neu_Vi_Anh_Nhu");
        if (element) {
            WaveSurfer.create({
                container: element,
                waveColor: 'rgb(200, 0, 200)',
                progressColor: 'rgb(100, 0, 100)',
                url: '/audio/Neu_Vi_Anh_Nhu.mp3',
            })
        }
    }, [])

    return (
        <div id="Neu_Vi_Anh_Nhu">
            wave track
        </div>
    )
}

export default WaveTrack;
