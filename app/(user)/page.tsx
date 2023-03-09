import React from "react";
import { previewData } from "next/headers";
import { groq } from "next-sanity";

import { client } from "@/lib/sanity.client";
import PreviewSuspense from "@/components/PreviewSuspense";
import BlogListPreview from "@/components/BlogListPreview";
import BlogList from "@/components/BlogList";

const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->,
  } | order(publishedAt desc)
`;

export const revalidate = 600;

type Props = {};

async function Home({}: Props) {
  if (previewData()) {
    return (
      <>
        <PreviewSuspense
          fallback={
            <div role="status">
              <p className="text-center text-lg animate-pulse text-[#dbbadd] mb-0">
                Loading Preview...
              </p>
            </div>
          }
        >
          {/* WARNING:DO NOT RUN WITH REACT DEV TOOLS INSTALLED. FUCKS UP PREVIEW MODE */}
          <BlogListPreview query={query}/>
        </PreviewSuspense>
      </>
    );
  }

  const posts = await client.fetch(query);
  return (
    <>
      <div>
        <BlogList posts={posts}/>
      </div>
    </>
  );
}

export default Home;
