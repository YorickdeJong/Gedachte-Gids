'use client'

import { fadeUp, zoomIn } from '@/components/const/anim'
import { Typography } from '@/components/ui/typography'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function WorkTogether() {
    return (

        <section className='my-24'>
            <CurveSVG />
            <motion.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.1 }}
                className='md:py-24 py-10 bg-sky-100'>
                <div className='container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
                    <motion.div
                        variants={fadeUp}>
                        <p className="text-dark text-lg font-bold md:text-left text-center uppercase tracking-wide">
                            Voel je thuis bij ons
                        </p>
                        <Typography variant='title' className="md:text-[39px] max-w-[550px] text-[28px] md:text-left text-center font-bold mt-2">
                            Neem contact met ons op om samen te werken aan jouw hersteltraject.
                        </Typography>
                        
                        <div className=' md:text-left text-center mt-8'>
                            <Link href="/contact-us#contact_form" 
                            className="hover:bg-blue-900 justify-center text-center hover:text-white text-sky-900 font-semibold uppercase tracking-wide px-6 py-3 bg-white rounded-[36.46px]">
                                Plan Nu een Afspraak
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={zoomIn}
                        className=''>
                        <Image src="/assets/images/contactUs.png" alt='rectangle.png' width={499} height={506} className='ml-auto' />
                    </motion.div>
                </div>
            </motion.div>
            <InverseCurveSVG />
        </section>
    )
}


const CurveSVG = () => (
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-20">
      <path d="M0,100 C360,0 720,100 1080,0 1440,100 1440,100 1440,100 L1440,100 L0,100" fill="#E3F1FF"></path>
    </svg>
);

const InverseCurveSVG = () => (
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-20">
        <path d="M0,0 C360,100 720,0 1080,100 1440,0 1440,0 1440,0 L1440,0 L0,0" fill="#E3F1FF"></path>
    </svg>
);
