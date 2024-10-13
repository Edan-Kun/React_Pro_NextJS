import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
import { sendRequest } from "@/utils/api";

const HomePage = async () => {
  const res = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "Remix", limit: 1 },
  })

  return (
    <Container maxWidth="xl">
      <MainSlider />
      <MainSlider />
      <MainSlider />
    </Container>
  )
}
export default HomePage;
