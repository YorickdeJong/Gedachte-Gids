import dynamic from 'next/dynamic';
import Hero from './hero';
import WellnessSection from './welnessSection';
import MissionVision from './mission_vision';
import Testimonials from './Testimonials';
import Blog_Sec from './blogSection';
import { client } from '@/sanity/lib/client';
import { QBlogs, QTeams, QTestimonial } from '@/sanity/lib/queries'
import WorkTogether from './Contact';

//Define your components in the Page.tsx
// The /app/ route is your home page

//Example: 
// /app/about-us will be your about us page
// IN /app/about-us you define your page.tsx, this is the file that will display all components

export default async function IndexPage() {
  const blogs = await client.fetch(QBlogs, { cache: 'no-store' })

  return (
    <section className="">
      <Hero />
      <WellnessSection /> 
      <MissionVision />
      {/* <Testimonials testimonial={testimonial}/> */}
      <Blog_Sec blogs={blogs}/>
      <WorkTogether />
    </section>
  );
}
