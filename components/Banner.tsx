import React from "react";
// import { HeartIcon } from "@heroicons/react/24/solid";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Thoughts Unleashed</h1>
        <h2 className="mt-5 font-medium">
          A journey through my{" "}
          <span className="underline decoration-[#dbbadd] decoration-2 font-bold">
            thoughts
          </span>{" "}
          and{" "}
          <span className="underline font-bold decoration-[#dbbadd] decoration-2">
            ideas
          </span>
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-[#fcfcfc]/50 max-w-sm">
        Built using Next.js 13 and Sanity CMS
        {/* <HeartIcon className="w-4 h-4 inline-block" /> */}
        <br />
        by Adithyan Jayakumar
      </p>
    </div>
  );
}

export default Banner;
