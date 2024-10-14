'use client'
import WaveTrack from '@/components/track/wave.track';
import Container from '@mui/material/Container';
import { useSearchParams } from 'next/navigation';

const DetailTrackPage = ({ params }: { params: { slug: string } }) => {
    const searchParams = useSearchParams();
    const search = searchParams.get('audio');

    return (
        <Container maxWidth="xl">
            <div>
                <WaveTrack />
            </div>
        </Container>
    )
}
export default DetailTrackPage;