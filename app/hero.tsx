'use client';

import { HTMLAttributes, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useScrollTransform from '@/hook/scroll-transform';
import { motion, useSpring } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import Motion from '@/components/motion';
import { Images } from '@/components/images';
import { fontRobotoSlab, inter } from '@/lib/fonts';

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

export default function Hero({ className, ...props }: HeroProps) {
  const target = useRef(null);


  const marginTop = { marginTop: 50 };
  const [currentIndex, setCurrentIndex] = useState(0);

  const transition = {
    delay: 0,
    duration: 0.75,
    ease: [0.43, 0.13, 0.7, 0.99]  // This is an example cubic bezier curve for smooth easing
  };

  
  const sliderVariants = {
  hidden: { opacity: 0, x: '-50%' },
  visible: { opacity: 1, x: '0%' },
  exit: { opacity: 0, x: '50%' },
  };

  const handleDragEnd = (event : any, info : any) => {
      // Handle the drag end event
      // For example, if the drag distance is greater than a threshold, show more or less brands
      if (info.offset.x > 50) {
          showLessBrands();
      } else if (info.offset.x < -50) {
          showMoreBrands();
      }
  };

  const showMoreBrands = () => {
    if (currentIndex < titles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    else if (currentIndex >= titles.length - 1) {
      setCurrentIndex(0);
    }
  }

  const showLessBrands = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(titles.length - 1);
    } else
    if (currentIndex <= titles.length - 1) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  console.log('currentIndex', currentIndex)

   const ImageArray = [
    '/assets/images/heroImage-1.png',
    '/assets/images/heroImage-1.png',
    '/assets/images/heroImage-1.png',
    ]

    const imageTitles = [
    'Bekijk Tops',
    'Bekijk Shorts',
    'Bekijk Long-Sleeves'

    ]
    const titles = [
    'Ontdek Je Innerlijke Kracht',
    'Ontdek Je Innerlijke Kracht',
    'Ontdek Je Innerlijke Kracht',
    ]

    const subTitles = [
    'Psychologen bieden deskundige begeleiding en ondersteuning om je te helpen de uitdagingen van het leven te navigeren en je mentale welzijn te bevorderen.',
    'Psychologen bieden deskundige begeleiding en ondersteuning om je te helpen de uitdagingen van het leven te navigeren en je mentale welzijn te bevorderen.',
    'Psychologen bieden deskundige begeleiding en ondersteuning om je te helpen de uitdagingen van het leven te navigeren en je mentale welzijn te bevorderen.',
    ]

    const links = [
    '/shop/tops',
    '/shop/shorts',
    '/shop/long-sleeves'
    ]

  return (
    <motion.section
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      key={currentIndex}
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={sliderVariants}
      transition={transition}
      ref={target}
      className={cn('relative overflow-hidden container', className, {})}
      
    >
      


      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 mt-40 pb-20 mb-12">

        <div className='absolute top-[-60px] md:top-[50px] left-[0px] flex flex-row justify-between gap-10'>
            <div onClick = {()=> setCurrentIndex(0)} className='h-3 rounded-full bg-[#E4E4E4] hover:scale-110 hover:cursor-pointer' 
            style = {{backgroundColor: currentIndex === 0 ? '#72C4F4' : '#E4E4E4',
            width: currentIndex === 0 ? '52px' : '12px'
            }}/>
            <div onClick = {()=> setCurrentIndex(1)} className='h-3 w-3 rounded-full bg-[#E4E4E4] hover:scale-110 hover:cursor-pointer' 
            style = {{backgroundColor: currentIndex === 1 ? '#72C4F4' : '#E4E4E4',
            width: currentIndex === 1 ? '52px' : '12px', 
            }}/>
            <div onClick = {()=> setCurrentIndex(2)} className='h-3 w-3 rounded-full bg-[#E4E4E4] hover:scale-110 hover:cursor-pointer' 
            style = {{backgroundColor: currentIndex === 2 ? '#72C4F4' : '#E4E4E4',
            width: currentIndex === 2 ? '52px' : '12px', 
            }}/>
        </div>

        <Motion
          initial="hidden"
          className="flex flex-col  justify-center" // Adjusted the max-width here
        >
          <Typography variant={'muted'} className={`uppercase text-primary ${inter.className}`}>
            Gedachte Gids
          </Typography>
          <Typography variant={'heading'} className={`lg:text-4xl text-[#121212] mt-2 ${fontRobotoSlab.className}`}>
            {titles[currentIndex]}
          </Typography>
          <Typography
            variant={'muted'}
            className=" mt-4 text-[#313131] max-w-[600px]"
          >
            {subTitles[currentIndex]}
          </Typography>
         
            <Link href={'/contact'} className='mt-8'>
              <Button className="md:text-lg text-white md:text-white rounded-full py-2">
                Boek een afspraak  &rarr;
              </Button>
            </Link>
        </Motion>
        <div className="relative group flex flex-col items-center justify-center hover:opacity-80">
          <Link href = '/contact'>
            <Images.hero_bg_2 className="absolute top-20 right-0 w-full h-full hero-bg-animate" />
            <Images.hero_bg_1 className="absolute bottom-10 left-0 w-full h-full hero-bg-animate" />
            <Images.hero_1_min className="relative md:h-[500px] md:w-[580px] h-[400px] w-[500px] z-[3] hero-1-min-animate" />
            <div className='absolute group-hover:inline-flex hidden top-[-40px] left-[40%]'>
                <Typography variant = 'muted' className='text-primary font-bold'>Begin Jouw Reis</Typography>
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
