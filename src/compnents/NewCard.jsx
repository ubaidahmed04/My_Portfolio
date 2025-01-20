import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Image from "next/image";
  
  export function NewCard({title,description,URL,path,blurImageUrl}) {
    return (
      <>
       <Card className="w-full max-w-[60rem]  h-96 sm:h-80 md:h-80 flex-col sm:flex-row aspect-w-16 aspect-h-9 bg-none">
  <CardHeader
    shadow={false}
    floated={false}
    className="m-0 w-full sm:w-2/5 shrink-0 rounded-b-none sm:rounded-r-none bg-none object-contain"
  >
    <Image
      height={800}
      width={700}
      src={URL}
      className="h-full w-full transform transition-transform duration-500 hover:scale-105 "
      alt="Project image "
      placeholder="blur"
      blurDataURL={blurImageUrl}
    />
  </CardHeader>
  <CardBody className="p-4 bg-gray text-light flex justify-around flex-col overflow-hidden">
    <Typography variant="h4" color="blue-gray " className="mb-2 text-shadow-custom">
      {title}
    </Typography>
    <Typography color="gray" className="mb-8 font-normal overflow-hidden">
      {description}
    </Typography>
    <a href={path} className="inline-block">
      <Button
        variant="text"
        className="flex items-center gap-2  text-light hover:bg-light hover:text-dark hover:translate-x-2 hover:-translate-y-2 bg-dark"
      >
        Live Preview
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

      </>
    );
  }
  