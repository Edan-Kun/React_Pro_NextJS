'use client'
import { useHasMounted } from "@/utils/customHook";
import { AppBar, Container } from "@mui/material";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const AppFooter = () => {
    const hasMounted = useHasMounted();

    if (!hasMounted) return (<></>)

    return (
        <AppBar
            position="fixed"
            color="primary"
            sx={{ top: 'auto', bottom: 0, background: "#f2f2f2" }}
        >
            <Container
                maxWidth="xl"
                sx={{ display: "flex", gap: 10 }}
            >
                <AudioPlayer
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
    )
}
export default AppFooter;