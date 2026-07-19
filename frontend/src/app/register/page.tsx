"use client";

import React from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Register() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://7coewmodf94rivxl.private.blob.vercel-storage.com/youtube_bg.mp4?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfN0NvZXdNT0RGOTRySXZYbCIsIm93bmVySWQiOiJ0ZWFtX0Y5Ujl2UGJBNkpXYlF0WXllcjZkcDhNMCIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzg0NTI5Mzk3NTEwLCJpYXQiOjE3ODQ0ODYxOTk2MjN9.v4DQjWFv84ELTzYt0wbMEp2bIr9o7DNP46ry0M2EKKs&vercel-blob-signature=0VYpRTndrs-L59EvejBHn1OgbDg-jyL4rGZdRn--ux8" type="video/mp4" />
      </video>
      {/* Dark overlay to match the hero section */}
      <div className="absolute inset-0 h-full w-full bg-gray-700/60" />
      
      <Card className="relative z-10 w-full max-w-lg p-8 shadow-2xl">
        <Typography variant="h3" color="blue-gray" className="mb-2 text-center">
          Secure Your Spot
        </Typography>
        <Typography color="gray" className="mb-8 font-normal text-center">
          Enter your details below to register for Head Start.
        </Typography>
        
        <form className="flex flex-col gap-5">
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
              Full Name
            </Typography>
            <Input
              size="lg"
              placeholder="John Doe"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
              Email Address
            </Typography>
            <Input
              type="email"
              size="lg"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
              Phone Number
            </Typography>
            <Input
              type="tel"
              size="lg"
              placeholder="+94 77 123 4567"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          
          <Button className="mt-4" fullWidth color="gray" size="lg">
            Confirm Registration
          </Button>

          <div className="mt-4 text-center">
            <a href="/">
              <Typography 
                variant="small" 
                color="gray" 
                className="hover:text-gray-900 font-medium transition-colors"
              >
                &larr; Back to Home
              </Typography>
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
}