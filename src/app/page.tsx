import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
import { sendRequest } from "@/utils/api";

const HomePage = async () => {
  const remix = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "Remix", limit: 10 },
  })

  const chill = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "CHILL", limit: 10 },
  })

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "PARTY", limit: 10 },
  })

  return (
    <Container maxWidth="xl">
      <MainSlider
        title="Top Remix"
        data={remix?.data ?? []}
      />
      <MainSlider
        title="Top Chill"
        data={chill?.data ?? []}
      />
      <MainSlider
        title="Top Party"
        data={party?.data ?? []}
      />
    </Container>
  )
}
export default HomePage;
