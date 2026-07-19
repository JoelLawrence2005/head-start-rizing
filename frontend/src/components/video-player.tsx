'use client';

import { Typography } from "@material-tailwind/react";

interface VideoPlayerProps {
  /**
   * The Vercel Blob URL (or any URL) of the video you want to play.
   * You can get this directly from your Vercel Dashboard -> Storage -> Blob.
   */
  videoUrl: string;
}

export function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  if (!videoUrl) return null;

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg bg-gray-900 border border-gray-800">
      <video 
        controls 
        className="w-full h-auto aspect-video"
        preload="metadata"
        controlsList="nodownload" // Optional: hides the download button
      >
        <source src={videoUrl} type="video/mp4" />
        <source src={videoUrl} type="video/webm" />
        <Typography color="white" className="p-4 text-center">
          Your browser does not support the video tag.
        </Typography>
      </video>
    </div>
  );
}
