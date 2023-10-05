
import { dateFormate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Featured_Post({data} : any) {
    return (
        <div>
            <Link href={`/blogs/${data?.slug?.current}`} className='featured_img hover:opacity-80'>
                <Image src={data?.featureImage?.asset?.url} alt={data?.name} width={645} height={437} className='h-48 rounded-lg object-cover' />
            </Link>
            <div className='post_meta flex justify-between items-center my-8'>
                <div className='flex gap-3 items-center '>
                    <Image src="/images/blog/author.png" alt='blog/author.png' width={33} height={34} />
                    <span>
                        <Link href="#" className="text-neutral-900 text-sm font-normal leading-loose">
                            Joanna Wellick
                        </Link>
                    </span>
                </div>
                <span className='h-[1px] w-8 bg-black/10'></span>
                <Link href="#" className="text-gray-500 text-sm font-normal leading-loose">
                {dateFormate(data?._createdAt)}
                </Link>
            </div>
            <div className='post_content'>
                <Link href={`/blogs/${data?.slug?.current}`} className="post-title w-[632px] text-sky-900 text-xl font-bold">
                {data?.name}
                </Link>
                <p className="post_excrpt text-neutral-500 text-[15px] font-normal leading-[30px] mt-2.5">
                {data?.excerpt}
                                </p>
            </div>
        </div>
    )
}

export default Featured_Post