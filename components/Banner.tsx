import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Thoughts Unleashed</h1>
        <h2 className="mt-5">
          A journey through my thoughts and ideas
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-[#fcfcfc]/50 max-w-sm">
        Built using Next.js 13 and Sanity CMS with{" "}
        <HeartIcon className="w-4 h-4 inline-block" />
        <br />
        by Adithyan Jayakumar
      </p>
    </div>
  );
}

export default Banner;
