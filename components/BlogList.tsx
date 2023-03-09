import Image from "next/image";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

import urlFor from "@/lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <>
      <div>
        <hr className="border-[#dbbadd] mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
          {posts.map((post) => (
            <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
              <div
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                  <Image
                    src={urlFor(post.mainImage).url()!}
                    alt={post.author.name}
                    fill
                    className="object-cover object-left lg:object-center"
                  />
                  <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-[#fcfcfc] p-5 flex justify-between">
                    <div>
                      <p className="font-bold mb-0">{post.title}</p>
                      <p className="mb-0">
                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                      {post.categories.map((category) => (
                        <div className="bg-[#dbbadd] text-center text-[#2c2c2c] px-3 py-1 rounded-full text-sm font-semibold" key={category._id}>
                          <p className="mb-0">{category.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex-1">
                  <p className="underline text-lg font-bold mb-0">{post.title}</p>
                  <p className="text-white/50 line-clamp-2 mb-0">
                    {post.description}
                  </p>
                </div>
                <p className="mt-5 font-bold flex items-center group-hover:underline mb-0">
                  Read Post <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                </p>
              </div>
            </ClientSideRoute>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogList;
