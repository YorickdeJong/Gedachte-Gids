import React from 'react'
import PostBox from '@/components/postBox'
import Link from 'next/link'
import { fadeUp } from '@/components/const/anim'
import { client } from '@/sanity/lib/client'
import { QBlogs, QEvents } from '@/sanity/lib/queries'
import MotionWrapper from '@/components/motion-wrapper'
import { Typography } from '@/components/ui/typography'
import Breadcrumb from '@/components/breadcrumb'

export default async function Blogs() {
    const blogs = await client.fetch(QBlogs)
    
    return (
        <main>  
            <section className='py-20'>
                <div className='container mx-auto px-4 border-b border-black/20'>
                    <Breadcrumb pageTitle='blogs' />   
                    <Typography variant = 'heading' className=" text-[35px] md:text-left text-center font-semibold leading-[45px] mb-2">
                        Onze Blog
                    </Typography>
                    <Typography variant = 'muted' className="opacity-80 text-black md:text-left text-center font-medium leading-[45px] mb-5">
                        Ideeën, Begeleiding en Motivatie voor een Leven van Uitmuntendheid
                    </Typography>
                </div>
                <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-7 mt-20'>
                    {blogs?.map((item: any, idx: number) => {
                        return <PostBox key={idx} data={item} />
                    })}
                </div>
                {/* <div className='container mx-auto px-4 pt-20 text-center'>
                    <Link href="#" className="hover:bg-white hover:text-blue-900 hover:border-2 text-center text-white text-[14.91px] font-semibold uppercase tracking-wide px-16 py-4 bg-sky-900 rounded-[36.46px]">
                        Lees Meer
                    </Link>
                </div> */}
            </section>
        </main>
    )
}
