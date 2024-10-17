'use client'
import { useTrackContext } from '@/library/track.wrapper';
import { useHasMounted } from "@/utils/customHook";
import { AppBar, Container } from "@mui/material";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useRef, useEffect } from 'react';


const AppFooter = () => {
    const hasMounted = useHasMounted();
    const playerRef = useRef(null);
    const { currentTrack, setCurrentTrack } = useTrackContext() as ITrackContext;

    useEffect(() => {
        if (currentTrack?.isPlaying === false) {
            //@ts-ignore
            playerRef?.current?.audio?.current?.pause();
        }
        if (currentTrack?.isPlaying === true) {
            //@ts-ignore
            playerRef?.current?.audio?.current?.play();
        }
    }, [currentTrack])

    if (!hasMounted) return (<></>)

    return (
        <div style={{ marginTop: 30 }}>
            <AppBar
                position="fixed"
                color="primary"
                sx={{
                    top: 'auto', bottom: 0,
                    background: "#f2f2f2"
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        gap: 10,
                        '.rhap_main': {
                            gap: "30px"
                        },
                        '.rhap_additional-controls': {
                            justifyContent: "center"
                        },
                        '.rhap_main-controls': {
                            marginRight: "20px"
                        }
                    }}
                >
                    <AudioPlayer
                        ref={playerRef}
                        layout='horizontal-reverse'
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/${currentTrack.trackUrl}`}
                        volume={0.5}
                        style={{
                            boxShadow: "unset",
                            background: "#f2f2f2"
                        }}
                        onPlay={() => {
                            setCurrentTrack({ ...currentTrack, isPlaying: true })
                        }}
                        onPause={() => {
                            setCurrentTrack({ ...currentTrack, isPlaying: false })
                        }}
                    />
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        justifyContent: "center",
                        minWidth: 130,
                        borderLeft: "3px solid #ccc",
                        paddingLeft: 30
                    }}>
                        <div style={{ color: "#ccc" }}>{currentTrack.description}</div>
                        <div style={{ color: "black" }}>{currentTrack.title}</div>
                    </div>
                </Container>

            </AppBar>
        </div>
    )
}
export default AppFooter;