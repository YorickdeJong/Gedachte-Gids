import { fadeUp, zoomIn } from '@/components/const/anim'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { QStaff } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import MotionWrapper from '@/components/motion-wrapper'
import { Typography } from '@/components/ui/typography'
import Breadcrumb from '@/components/breadcrumb'

export default async function About_Us() {
    const staff = await client.fetch(QStaff)

    return (
        <main>
        <MotionWrapper
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
            className='py-24'>
            <div className='relative'>
            <Image src="/assets/images/about-bg.png" alt='about-bg.png' width={498} height={506} loading="lazy" className='absolute inset-y-0 right-0 z-[-2] object-cover h-full md:block hidden' />
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between'>
                <MotionWrapper
                div
                variants={fadeUp}>
                <div className=''>
                    <Breadcrumb pageTitle='Over Ons'/>   
                    <Typography variant = 'muted' className="text-dark text-2xl md:text-left text-center font-medium max-w-[522px] mb-5">
                    Ons Verhaal
                    </Typography>
                    <Typography variant = 'title' className=" md:text-[39px] text-2xl md:text-left text-center font-medium leading-[45px] mb-7 max-w-[522px]">
                    Samen Werken aan Mentaal Welzijn
                    </Typography>
                    <p className="opacity-80 text-black md:text-[16px] text-base md:text-left text-center font-normal leading-[39px] tracking-wide mb-10 max-w-[625px]">
                    Bij Gedachte Gids worden we gedreven door onze passie voor geestelijke gezondheidszorg en onze visie op een wereld waarin iedereen toegang heeft tot de ondersteuning die ze nodig hebben. Opgericht door een team van toegewijde professionals met jarenlange ervaring in het veld, is Gedachte Gids snel uitgegroeid tot een toonaangevende dienstverlener voor psychologen, therapeuten en geestelijke gezondheidsprofessionals.
                    </p>
                </div>
                </MotionWrapper>
                <MotionWrapper
                div
                variants={zoomIn}
                className='relative'>
                <Image src="/assets/images/story-mbl.png" loading="lazy" alt='story-mbl.png' width={324} height={233} quality={100} className='md:hidden block w-full' />
                <Image src="/assets/images/story.png" loading="lazy" alt='story.png' width={556} height={396} quality={100}  className='md:block hidden ml-auto' />
                </MotionWrapper>
            </div>
            </div>
        </MotionWrapper>
        <MotionWrapper
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
            className='py-24'>
            <div className='relative'>
            <Image src="/assets/images/about-bg.png" loading="lazy" alt='about-bg.png' width={498} height={506} className='absolute inset-y-0 left-0 z-[-2] object-cover h-full md:block hidden' />
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between'>
                <MotionWrapper
                div
                variants={fadeUp}
                className='md:order-2 order-1'>
                <div className=''>
                    <Typography variant='muted' className="text-dark text-2xl md:text-left text-center font-medium max-w-[522px] mb-5">
                    Onze Waarden
                    </Typography>
                    <Typography variant = 'title' className="md:text-[39px] text-2xl md:text-left text-center font-medium leading-[45px] mb-7 max-w-[614px]">
                    Geestelijke Gezondheid op de Eerste Plaats
                    </Typography>
                    <p className="opacity-80 text-black md:text-[16px] text-base md:text-left text-center font-normal leading-[39px] tracking-wide mb-10 max-w-[625px]">
                    De kern van onze organisatie wordt gevormd door onze waarden, die ons leiden bij elke interactie en beslissing. We geven prioriteit aan empathie, compassie en respect in onze benadering van geestelijke gezondheidszorg. We zijn toegewijd aan het creëren van een veilige en inclusieve omgeving waar individuen zich op hun gemak voelen om de hulp te zoeken die ze nodig hebben.
                    </p>
                </div>
                </MotionWrapper>
                <MotionWrapper
                div
                variants={fadeUp}
                className='relative md:order-1 order-2'>
                <Image src="/assets/images/values-mbl.png" loading="lazy" alt='values-mbl.png' width={324} height={233} quality={100} className='md:hidden block w-full' />
                <Image src="/assets/images/values.png" loading="lazy" alt='values.png' width={556} height={396}  quality={100} className='md:block hidden' />
                </MotionWrapper>
            </div>
            </div>
        </MotionWrapper>

        <MotionWrapper
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
            className='py-20'>
            <div className='container mx-auto px-4'>
            <MotionWrapper div variants={fadeUp}>
                <Typography variant = 'muted' className="text-dark text-2xl md:text-left text-center font-medium capitalize leading-[52px]">
                Wij zijn er voor u
                </Typography>
                <Typography variant = 'title' className="text-[39px] md:text-left text-center font-semibold leading-[52px]">
                Ons Team
                </Typography>
            </MotionWrapper>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-5 mt-14'>
                {staff?.map((item: any, idx: number) => {
                console.log("🚀 ~ file: index.tsx:97 ~ {staff?.map ~ item:", item)
                return(
                    <MotionWrapper div key={idx} variants={fadeUp}
                    className="grid gap-5 py-6 ">
                    <div className='rounded-full w-[200px] h-[174px] mx-auto mb-8 relative'>
                    <Image loading="lazy" src={item?.featureImage?.asset.url} alt={item?.img} width={200} height={174} className='' />
                    </div>
                    <p className="text-center text-black text-[22px] font-bold">
                    {item?.name}
                    </p>
                    <p className="text-center text-zinc-500 text-base font-medium">
                    {item?.designation}
                    </p>
                    <ul className='flex gap-7 justify-center items-center'>
                    <li>
                        <Link href="#" className='block w-fit'>
                            <Image loading="lazy" src="/assets/images/Team/fb.png" alt='team/fb.png' width={18} height={18} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='block w-fit'>
                            <Image loading="lazy" src="/assets/images/Team/email.png" alt='team/email.png' width={18} height={18} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='block w-fit'>
                            <Image loading="lazy" src="/assets/images/Team/twiter.png" alt='team/twiter.png' width={18} height={18} />
                        </Link>
                    </li>
                    </ul>
                </MotionWrapper>
                ) 
                
                })}
            </div>
            </div>
        </MotionWrapper>

        <MotionWrapper
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
            className='py-24'>
            <div className='relative'>
            <Image src="/assets/images/about-bg.png" loading="lazy" alt='about-bg.png' width={498} height={506} className='absolute inset-y-0 right-0 z-[-2] object-cover h-full md:block hidden' />
            <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-5 items-center justify-between'>
                <MotionWrapper div variants={fadeUp}>
                <div className=''>
                    <Typography variant = 'muted' className="text-dark text-2xl md:text-left text-center font-medium max-w-[522px] mb-5">
                    Barrières Doorbreken
                    </Typography>
                    <Typography variant = 'title' className=" md:text-[39px] text-2xl md:text-left text-center font-medium leading-[45px] mb-7 max-w-[522px]">
                    Toegankelijke Geestelijke Gezondheid
                    </Typography>
                    <p className="opacity-80 text-black md:text-[16px] text-base md:text-left text-center font-normal leading-[39px] tracking-wide mb-10 max-w-[625px]">
                    We begrijpen dat toegang tot geestelijke gezondheidsdiensten geen uitdaging mag zijn. Ons platform is ontworpen om barrières te doorbreken en geestelijke gezondheidszorg toegankelijk te maken voor iedereen. Of je nu de voorkeur geeft aan persoonlijke sessies of online counseling, we hebben opties om aan jouw voorkeuren en behoeften te voldoen.
                    </p>
                </div>
                </MotionWrapper>
                <MotionWrapper div variants={zoomIn}
                className='relative'>
                <Image src="/assets/images/barriers-mbl.png" loading="lazy" alt='barriers-mbl.png' width={324} height={233} className='md:hidden block w-full' />
                <Image src="/assets/images/barriers.png"loading="lazy"  alt='barriers.png' width={556} height={396} className='md:block hidden ml-auto' />
                </MotionWrapper>
            </div>
            </div>
        </MotionWrapper>
        </main>
    )
}

