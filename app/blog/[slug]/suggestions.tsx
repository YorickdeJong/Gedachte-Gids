import BlogCard from "@/components/BlogCard";
import { fetchSimilarArticles, getBlogTags } from "@/sanity/sanity-utils";


interface ImageDetail {
    alt: string;
    text: Array<{ type: string; children?: Array<any>; [key: string]: any }>;
}

interface richtText {
    detailImage: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
      hotspot?: {
        x: number;
        y: number;
      };
      crop?: {
        top: number;
        bottom: number;
        left: number;
        right: number;
      };
      fields: ImageDetail;
    };
}


interface BlogState {
    title?: string | null;
    description: string | '';
    author?: string | null;
    date?: string | null;
    image?: string | '';
    alt: string | '';
    keywords: [],
    id: string | null;
    richtText: richtText[],
}


export default async function Suggestions({slug} : any) {
      console.log('slug', slug)
      const tag = await getBlogTags(slug.slug);
      const similarArticles = await fetchSimilarArticles(tag, slug.slug); // Implement this function

      
      return (
        <div    
            className="scroll-container container mt-10 grid grid-cols-1 gap-16 md:mt-20 lg:grid-cols-2" 
        >
        {similarArticles && similarArticles[0] && similarArticles.map((el: any) => (
            <BlogCard
            id={el._id}
            image={el.image}
            key={el.label}
            richtText={el.richText}
            {...el}
            />
        ))}
    </div>
      )
}