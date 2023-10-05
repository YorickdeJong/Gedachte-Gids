'use client'

import React from 'react'
import Link from 'next/link'
import { AiOutlineShareAlt } from 'react-icons/ai'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp } from '@/components/const/anim'
import { dateFormate } from '@/lib/utils'
import { Typography } from '@/components/ui/typography'

function Blog_Sec({blogs}: any) {

    return (
        <motion.section
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className='md:py-20 py-10'>
            <div className='container mx-auto px-4'>
                <motion.div
                    variants={fadeUp}
                    className='mb-12'>
                    <Typography variant = 'title' className="py-[30px] border-b border-violet-950/40 max-w-[480px] text-tertairy">
                            Leer Meer Van Onze
                            Specialisten
                    </Typography>
                </motion.div>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-7'>
                    {blogs.slice(0,2).map((blog: any) => (
                        <motion.div
                        variants={fadeUp}>
                        <Link href={`/blog`} className='featured_img hover:opacity-80'>
                            <Image src={blog?.featureImage?.asset?.url} alt='blog/1.png' width={645} height={437} className='w-full rounded-xl' />
                        </Link>
                        <div className='post_meta grid md:grid-cols-2 grid-cols-1 justify-between my-8'>
                            <div className='flex justify-between items-center'>
                                <div className='flex gap-3 items-center'>
                                    <Image src="/assets/images/author.png" alt='blog/author.png' width={33} height={34} className='rounded-xl'/>
                                    <span>
                                        <Link href="#" className="text-neutral-900 text-sm font-normal leading-loose">
                                            Joanna Wellick
                                        </Link>
                                    </span>
                                </div>
                                <span className='h-[1px] w-8 bg-black/10'></span>
                                <Link href="#" className="text-gray-500 text-sm font-normal leading-loose">
                                    {dateFormate(blog?._createdAt)}
                                </Link>
                            </div>
                            <div className='md:flex hidden justify-end'>
                                <Link href="#" className="text-gray-500 text-sm font-normal leading-loose flex items-center">
                                    <AiOutlineShareAlt />  1K shares
                                </Link>
                            </div>
                        </div>
                        <div className='post_content'>
                            <Link href={`/blogs/${blog?.slug?.current}`} className="post_title w-[632px] text-xl font-bold text-tertairy">
                                {blog?.name}
                            </Link>
                            <p className="post_excrpt opacity-80 text-black text-base font-normal leading-[33.92px] tracking-tight mt-2.5">
                            {blog?.excerpt}
                            </p>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Blog_Sec

