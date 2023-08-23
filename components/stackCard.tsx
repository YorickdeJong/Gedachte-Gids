'use client'
import { HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import Motion from './motion';
import { Typography } from './ui/typography';
import { useTechnologyState } from '@/context/technologie-provider';
import { useMediaQuery } from '@/hook/media-query';


interface TextArrayItem {
    text: string;
    heading: string;
  }
  
  interface ExtendedCardProps {
    label: string;
    image?: string;
    textCard?: string;
    textOne?: string;
    textTwo?: string;
    textArray?: TextArrayItem[];
  }
  
  export default function StackCard({
    label,
    textCard,
    textOne,
    textTwo,
    textArray,
    image,
    ...props
  }: ExtendedCardProps) {
    const {setTechnologyStateHandler} = useTechnologyState()
    const iphone = useMediaQuery('(max-width: 1200px)');


    const handleDivClick = () => {
        console.log('check clicked')
        setTechnologyStateHandler({
            label: label,
            textOne: textOne,
            textTwo: textTwo,
            textArray: textArray 
        });
      };

      
    const linkHref = {
        pathname: `/technologie/${label.toLowerCase().replaceAll(' ', '-')}`,
    };

    return (
        <Motion initial="down" asChild>
          <Link
            onClick={() => handleDivClick()}
            href={linkHref}
            className={cn(
              'block space-y-3 overflow-hidden rounded-2xl bg-card  my-16 transform transition-transform duration-300 hover:scale-115 relative',
              {
                'group/image hover:shadow-md cursor-pointer': image,
                'h-[400px]': !iphone,
                'block space-y-3 overflow-hidden rounded-2xl bg-card  p-7 lg:p-8': iphone
              }
            )}
          >
            {iphone ? 
              <>
                <Image
                  src={image!}
                  alt=""
                  className={cn(
                    '-mb-2 w-full -translate-y-9 scale-x-125 object-cover object-top h-[250px]',
                  )}
                  width={1000}
                  height={600}
                />
                <div>
                    <div className="flex items-center gap-4 ">
                    <p
                    className={cn(
                        'mb-2 grow text-xl font-bold uppercase md:text-2xl',
                    )}
                    >
                    {label}
                    </p>
                </div>

                <p className="leading-relaxed text-muted">{textCard}</p>
            </div>
            </>
             : 
              <div className={cn("flex flex-column justify-center h-full")}>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
                {/* Text */}
                <div className="flex-1 max-w-1/5 flex flex-col justify-center mx-16">
                  <h4 className="mb-10 text-5xl capitalize leading-[40px] text-stone-300">
                    {label}
                  </h4>
                  <Typography variant={'muted'}>
                    {textCard}
                  </Typography>
                </div>
        
                {/* Image */}
                <div className="flex-4 w-3/5">
                  <Image
                    src={image ? image : ''}
                    alt=""
                    width={1200}
                    height={600}
                    className={cn(
                      'object-cover h-full w-full',
                    )}
                  />
                </div>
            </div>
                
            }
          </Link>
        </Motion>
      );
}