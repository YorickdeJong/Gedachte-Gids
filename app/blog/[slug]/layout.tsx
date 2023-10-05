
import Suggestions from "./suggestions";
import React from "react";
import BlogSlug from "./page";
import { QSingleBlogs } from "@/sanity/lib/queries";

type Params = {
  params: {
      slug: string
  }
}

// export async function generateMetadata({params}: Params): Promise<Metadata> {
//   const slug = params.slug
//   let blogState = await getBlogPosts(slug);
//   blogState = blogState[0]

//   return {
//     title: blogState.title,
//     description: blogState.description,
//     keywords: blogState.keywords.join(', '),
//     alternates: {
//       canonical: `${WEBSITE_HOST_URL}/blog/${slug}`
//     },
//     openGraph: {
//       title: blogState.title,
//       description:  blogState.description,
//       url: `${WEBSITE_HOST_URL}/blog/${slug}`,
//       locale: 'nl',
//       siteName: blogState.title,
//       type: 'website',
//       images: [{
//         url: '/BlueWaterfall_icon.png'
//       }],
//     },
//     themeColor: [
//       { media: '(prefers-color-scheme: light)', color: 'white' },
//       { media: '(prefers-color-scheme: dark)', color: 'black' },
//     ],
//     icons: {
//       icon: '/BlueWaterfall_icon.png',
//     },
//   }
// }



export default function Layout({ children, params }: { children: React.ReactNode, params: Params }) {
    return (
      <>
        <section className="md:max-w-[900px] bg-white mt-8 mb-8 pt-10 pb-20 mx-auto md:container">
          <div className="md:container">
            {/* @ts-expect-error Server Component */}
            <BlogSlug params={params}/>
          </div>
        </section>
      </>
    );
}