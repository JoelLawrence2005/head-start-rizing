import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
  image?: string;
}

export function AboutCard({ title, description, subTitle, image }: AboutCardProp) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[350px] w-full items-end overflow-hidden rounded-2xl group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,_0,_0,_0.3)] hover:-translate-y-2"
    >
      {/* Background Image with Hover Zoom Effect */}
      {image && (
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      
      {/* Sleek Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Content */}
      <CardBody className="relative flex flex-col justify-end h-full w-full p-6 transition-transform duration-500 group-hover:-translate-y-2">
        <Typography
          variant="h6"
          color="white"
          className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-300 opacity-90"
        >
          {subTitle}
        </Typography>
        
        <Typography
          variant="h4"
          color="white"
          className="mb-2 leading-tight"
        >
          {title}
        </Typography>
        
        <Typography
          color="white"
          className="font-normal text-sm opacity-80"
        >
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default AboutCard;