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
        className="absolute top-0 left-0 h-full w-full object-cover"
      >
        <source src="/image/splash.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 h-full w-full bg-gray-700/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography variant="h3" color="white" className="mb-2">
            1st August @ Hatchworks
          </Typography>
          <Typography variant="h1" color="white" className="lg:max-w-3xl">
            Head Start
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
              <Button variant="gradient" color="white">
                Get Registered
              </Button>
            </a>
            <IconButton className="rounded-full bg-white p-6">
              <PlayIcon className="h-4 w-4 text-gray-900" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;