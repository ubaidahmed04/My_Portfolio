"use client";

import { cn } from "@/lib/utils";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPython, SiOpenai } from "react-icons/si";
import { Marquee } from "@/components/magicui/marquee";

// 1. Your sample reviews
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Working with the MERN stack and Python has changed the game for me.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "AI agents are the future. Pairing them with MERN is a power move.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "Python and AI agents make automation feel like magic.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "The flexibility of MongoDB with Python is unmatched.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I love combining React with AI to build smart apps.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "OpenAI + MERN stack = limitless possibilities.",
    img: "https://avatar.vercel.sh/james",
  },
];

// 2. Split into two rows for marquee
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// 3. Review Card
const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-white/[0.1] bg-black hover:bg-white/[0.05]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{name}</figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/80">{body}</blockquote>

      <div className="mt-3 flex flex-wrap gap-2 text-xl text-white/80">
        <SiMongodb title="MongoDB" />
        <SiExpress title="Express.js" />
        <SiReact title="React" />
        <SiNodedotjs title="Node.js" />
        <SiPython title="Python" />
        <SiOpenai title="OpenAI / AI Agents" />
      </div>
    </figure>
  );
};

// 4. Marquee Demo
export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-8">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee  pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Fade effect on left/right */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black" />
    </div>
  );
}
