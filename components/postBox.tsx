import { zoomIn } from './const/anim'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { dateFormate } from '@/lib/utils'
import MotionWrapper from './motion-wrapper'

function PostBox({ data }: any) {
    return (
        <MotionWrapper
            div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }} >
            <MotionWrapper div variants={zoomIn} className="bg-white rounded-[30px] shadow pb-10">
                <Link href={`/blog/${data?.slug?.current}`} className=''>
                    <Image src={data?.featureImage?.asset?.url} alt={data?.img} width={645} height={437} className='hover:opacity-80 w-full h-[350px] object-cover rounded-xl' />
                </Link>
                <div className='md:px-[30px] px-6 mt-8 mb-6'>
                    <Link href={`/blog/${data?.slug?.current}`} className="text-neutral-900 md:text-[25px] text-lg font-semibold md:leading-[45px] leading-[33.67px]">
                        {data?.name}
                    </Link>
                    <p className="text-gray-500 text-base font-normal leading-normal">
                        {data?.excerpt}
                    </p>
                </div>
                <div className='post_meta flex flex-wrap gap-2 justify-between md:px-[30px] px-6'>
                    <div className='author_box flex justify-between items-center'>
                        <div className='flex gap-3 items-center'>
                            <Image src="/assets/images/author.png" alt='blog/author.png' width={33} height={34} />
                            <span>
                                <Link href={`/blog/${data?.slug?.current}`}className="text-neutral-900 text-sm font-normal leading-loose">
                                    Joanna Wellick
                                </Link>
                            </span>
                        </div>
                        <span className='h-[1px] w-8 bg-black/10'></span>
                        <Link href={`/blog/${data?.slug?.current}`} className="text-gray-500 text-sm font-normal leading-loose">
                            {dateFormate(data?._createdAt)}
                        </Link>
                    </div>
                    <div className=''>
                        <Link href={`/blog/${data?.slug?.current}`} className="text-gray-500 text-sm font-normal leading-loose flex items-center">
                            <AiOutlineShareAlt />  1K shares
                        </Link>
                    </div>
                </div>
            </MotionWrapper>
        </MotionWrapper>
    )
}

export default PostBox