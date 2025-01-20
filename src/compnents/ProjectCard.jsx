import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

export function ProjectCard({path,URL,title,description}) {
  return (
    <Card className="w-full flex-shrink-0 flex flex-col flex-wrap">
  <CardHeader
    shadow={false}
    floated={false}
    // className="bg-blue-gray-100"
  >
    <Image
      src={URL}
      alt="card-image"
      height={1000}
      width={1000}
      className="w-full h-full object-cover "
    />
  </CardHeader>
  <CardBody className="bg-[#373737] hover:bg-[#607D8B] cursor-pointer text-cyan-200 flex flex-col justify-between  sm:p-6">
    <div>
     
      <Typography variant="h4" className="mb-2 text-base sm:text-lg md:text-xl">
       {title}
      </Typography>
      <Typography className="mb-4 text-sm sm:text-base md:text-lg font-normal">
      {description}
      </Typography>
    </div>
    <a href={path} className="inline-block">

      <Button variant="text" className="flex boton-elegante items-center gap-2 text-xs sm:text-sm md:text-md">
        Explore
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </a>
  </CardBody>
</Card>

  );
}
