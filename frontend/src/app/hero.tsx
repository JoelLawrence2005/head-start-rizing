"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-cover bg-no-repeat">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-full object-cover pointer-events-none"
      >
        <source src="/image/youtube_bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 h-full w-full bg-gray-700/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2 uppercase tracking-widest text-cyan-400 font-bold drop-shadow-md">
            1st August @ Hatchworks
          </Typography>
          <Typography variant="h1" className="lg:max-w-3xl text-6xl md:text-8xl font-black uppercase tracking-tight drop-shadow-lg" style={{ WebkitTextStroke: '2px black' }}>
            <span className="text-[#d8f126]">Head</span> <span className="text-white">Start</span>
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
          >
            Learning, Interactive, and Fun space to get to meet and know about the top Entrepreneurs in Sri Lanka
          </Typography>
          <div className="flex items-center gap-4">
            {/* Added Link to the Registration Page */}
            <a href="/register">
              <Button size="lg" className="bg-gradient-to-r from-[#e71a6e] to-[#f47321] hover:from-[#d8f126] hover:to-[#e71a6e] hover:text-black transition-all duration-300 text-white font-bold text-lg px-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 rounded-none border-2 border-black">
                Get Registered
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;