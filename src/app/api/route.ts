import { NextRequest, NextResponse } from 'next/server';

const GET = async (request: NextRequest, response: NextResponse) => {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const fileName = searchParams.get("audio");
    return await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tracks/${fileName}`)

}

export { GET };