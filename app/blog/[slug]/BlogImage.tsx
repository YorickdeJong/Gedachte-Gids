
'use client'
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import config from '@/sanity.config';

export default function Blockimage(props: any){
    const builder = imageUrlBuilder(config);

    function urlFor(source: any) {
        return builder.image(source);
    }

    return (
        <div className='my-6'>
            <Image
            src={urlFor(props.node.asset._ref).url()} 
            alt={props.node.alt} 
            width={800}
            height={500}
            loading="lazy"
            className='lg:p-12 p-2'
            />
        </div>
    )
}
