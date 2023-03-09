import React from "react";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import urlFor from "@/lib/urlFor";
import { client } from "@/lib/sanity.client";
import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
        ...,
        author->,
        categories[]->,
    }
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <>
      <article className="px-10 pb-28">
        <section className="space-y-2 border border-[#dbbadd] text-[#2c2c2c]">
          <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
            <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
              <Image
                className="object-cover object-center mx-auto"
                src={urlFor(post.mainImage).url()!}
                alt={post.author.name}
                fill
              />
            </div>
            <section className="p-5 bg-[#dbbadd] w-full">
              <div className="flex flex-col md:flex-row justify-between gap-y-5">
                <div>
                  <h1 className="text-4xl font-bold">{post.title}</h1>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex items-center space-x-2 space-y-2">
                  <Image
                    className="rounded-full"
                    src={urlFor(post.author.image).url()!}
                    alt={post.author.name}
                    width={40}
                    height={40}
                  />
                  <div className="w-64">
                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                    <div>{/* TODO:Add Bio */}</div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="italic pt-10">{post.description}</h2>
                <div className="flex items-center justify-end mt-auto space-x-2">
                  {post.categories.map((category) => (
                    <p
                      key={category._id}
                      className="bg-[#2c2c2c] text-[#dbbadd] px-3 py-1 rounded-full text-sm font-semibold mt-4"
                    >
                      {category.title}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
        <div className="flex justify-center pt-10">
          <div className="max-w-3xl">
            <PortableText value={post.body} components={RichTextComponents} />
          </div>
        </div>
      </article>
    </>
  );
}

export default Post;
