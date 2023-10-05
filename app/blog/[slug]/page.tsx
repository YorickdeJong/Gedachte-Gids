import BlockContent from '@sanity/block-content-to-react';


import Image from 'next/image';
import { Typography } from '@/components/ui/typography';
import Head from 'next/head';
import Breadcrumb from '@/components/breadcrumb';
import Caption from '@/components/caption';
import { QSingleBlogs } from "@/sanity/lib/queries";
import Script from 'next/script';
import React from 'react';
import Blockimage from './BlogImage';
import { Metadata, ResolvingMetadata } from 'next';
import { cn } from '@/lib/utils';
import { fontRobotoSlab, fontSans, inter } from '@/lib/fonts';
import { client } from '@/sanity/lib/client';

const BlockRenderer = (props: any) => {
    try {
        const { style = 'normal', _type } = props.node || {};

        if (/^h\d/.test(style)) {
          const level = style.replace(/[^\d]/g, '');
          return React.createElement(style, { className: `text-tertairy custom-heading-${level} ${fontRobotoSlab.className}` }, props.children);
        }
      
        if (style === 'normal') {
          return <p className={cn(`custom-normal-text text-dark ${inter.className}`)}>{props.children}</p>;
        }
      
        // Fall back to default handling
        return BlockContent.defaultSerializers.types.block(props);
    }
    catch(error) {
        console.log('errors', error)
    } 
};


type Params = {
    params: {
        slug: string
    }
}

export default async function BlogSlug({params: {slug}}: Params) {
    console.log('slug', slug)
    const blogState = await client.fetch(QSingleBlogs, {slug});

    console.log('BlogState', blogState)

    // const blogState = blog[0]
    const serializers = {
        types: {
            block: BlockRenderer,
            image: Blockimage,
        },
        list: (props : any) => {
            const { type } = props;
            const bullet = type === 'bullet';
            if (bullet) {
                return <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>{props.children}</ul>;
            }
            return <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>{props.children}</ol>
        },
        listItem: (props : any) => <li className={cn(`custom-normal-text ${inter.className}`)}>{props.children}</li>    
    };

    return (
            <section className='flex flex-col mt-12 p-8 md:p-0'>
                <Script
                    strategy="lazyOnload"
                    id="google-analytics-inline-script"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />

                <Script 
                strategy="lazyOnload"
                id="google-analytics-inline-script"
                >
                    {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                                page_path: window.location.pathname,
                                });
                            `}
                </Script>
                <Typography variant={'title'} className='lg:text-[40px] lg:leading-[60px]'>
                    {blogState.name}
                </Typography>
                <Breadcrumb pageTitle="Blog" className='mt-8' />
                <Caption className="mt-8 mb-6">Blog</Caption>
                <div className='flex flex-row justify-start'>
                    <Typography variant={'muted'} className='mb-12'>
                        {blogState._createdAt.slice(0,10)}
                    </Typography>
                </div>
                {blogState.featureImage && 
                    <div className='mb-10'>
                        <Image 
                        src={blogState.featureImage.asset.url} 
                        alt={blogState.name} 
                        width={1000}
                        height={500}
                        quality={100}
                        loading="lazy"
                        />
                    </div>
                }

              <BlockContent blocks={blogState.description} serializers={serializers} className="text-dark"/>    
            
            </section>
    );
}