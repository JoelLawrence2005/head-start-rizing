import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const videoUrl = 'https://7coewmodf94rivxl.private.blob.vercel-storage.com/youtube_bg.mp4';
  
  try {
    const response = await fetch(videoUrl, {
      headers: {
        Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch video:', response.status, response.statusText);
      return new NextResponse('Error fetching video', { status: response.status });
    }

    return new NextResponse(response.body, {
      headers: {
        'Content-Type': 'video/mp4',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Accept-Ranges': 'bytes',
      },
    });
  } catch (error) {
    console.error('Error in proxy route:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
