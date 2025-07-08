"use client";

import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function ProjectCard({
  title,
  description,
  URL,
  path,
  blurImageUrl,
  stackIcons = [],
}) {
  return (
    <div className="w-[280px] sm:w-[320px] md:w-[360px] bg-gray bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 mx-3">
      {/* Image */}
      <div className="relative h-44">
        <Image
          src={URL}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="hover:scale-105 transition-transform duration-500"
          placeholder="blur"
          blurDataURL={blurImageUrl}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[220px]">
        <div>
          <h4 className="text-light text-lg font-semibold">{title}</h4>
          <p className="text-light text-sm mt-2 line-clamp-3">{description}</p>
        </div>

        <div className="flex gap-2 mt-4 text-xl text-white/80 flex-wrap">
          {stackIcons.map((Icon, index) => (
            <Icon key={index} />
          ))}
        </div>

        <a href={path} target="_blank" rel="noopener noreferrer" className="mt-4">
          <Button className="bg-white text-black text-xs hover:bg-gray-200 w-full transition-transform hover:scale-105">
            Live Preview →
          </Button>
        </a>
      </div>
    </div>
  );
}
