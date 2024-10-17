'use client'
import { useHasMounted } from "@/utils/customHook";
import { AppBar, Container } from "@mui/material";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useTrackContext } from '@/library/track.wrapper';


const AppFooter = () => {
    const hasMounted = useHasMounted();

    if (!hasMounted) return (<></>)

    const { currentTrack, setCurrentTrack } = useTrackContext() as ITrackContext;

    console.log(">>> check currentTrack: ", currentTrack)


    return (
        <div style={{ marginTop: 30 }}>
            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: 'auto', bottom: 0, background: "#f2f2f2" }}
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
                        layout="horizontal-reverse"
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/Once_Upon_A_Time.mp3`}
                        volume={0.5}
                        style={{
                            boxShadow: "unset",
                            background: "#f2f2f2"
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
                        <div style={{ color: "#ccc" }}>Edan</div>
                        <div style={{ color: "black" }}>Who am I ?</div>
                    </div>
                </Container>

            </AppBar>
        </div>
    )
}
export default AppFooter;