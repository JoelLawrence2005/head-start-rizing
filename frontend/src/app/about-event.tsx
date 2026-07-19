"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Learn and Grow",
    description:
      "You will get to learn how Entreprenuers begin and grow to the top, alongside their challenges and obstacles, and possibly how you could avoid them.",
    subTitle: "Knowledge Exchange",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4tPV9z_cctCX3WLEYap11Ad4W6OgDAIdJVnV0V1haUdU5lUO5LWhjek&s=10"
  },
  {
    title: "Live Q&A",
    description:
      "Attend the session to directly ask our panel questions for even what the internet does not have answers for!",
    subTitle: "Discussion Panel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXgjKeE3ir7txeSnXLAh2lwbFvK4oueDWyQezXn5A6g&s=10",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        About the event
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Why Attend?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Welcome to Head Start, the goal of this event is to introduce and teach people about Entrepreurialship with the
        help of some of the best Entrepreneurs within the Island each from different industries. You will have the amazing opportunity to learn and network
        with such leaders.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
            image="frontend\public\image\WhatsApp Image 2026-07-19 at 12.04.08.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
