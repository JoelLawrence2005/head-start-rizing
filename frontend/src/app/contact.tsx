"use client";

import { Typography, Button } from "@material-tailwind/react";

export function Contact() {
  return (
    <section 
      className="container mx-auto py-12 px-4 flex flex-col items-center justify-center animate-gradient-x rounded-2xl my-10 max-w-4xl shadow-xl border border-transparent"
      style={{ backgroundImage: 'linear-gradient(to right, #fb923c, #ef4444, #eab308, #a855f7, #166534)' }}
    >
      <Typography variant="h3" color="white" className="mb-2 text-center">
        Have questions?
      </Typography>
      <Typography variant="lead" color="white" className="mb-6 text-center max-w-md opacity-90">
        Get in touch with Joel for any inquiries about the event.
      </Typography>
      <a href="https://wa.me/94778113763" target="_blank" rel="noopener noreferrer">
        <Button color="green" size="lg" className="flex items-center gap-2 shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 transition-shadow rounded-full">
          <i className="fa-brands fa-whatsapp text-2xl" />
          WhatsApp Joel
        </Button>
      </a>
    </section>
  );
}

export default Contact;
