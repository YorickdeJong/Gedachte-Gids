import Faqs from '@/components/faq'
import { fadeUp } from '@/components/const/anim'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidPhoneCall, BiSolidEnvelope, BiSolidMap, BiLogoTwitter, BiLogoInstagram, BiLogoDiscordAlt } from 'react-icons/bi'
import { QFaqs } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import MotionWrapper from '@/components/motion-wrapper'
import { fontRobotoSlab } from '@/lib/fonts'
import Breadcrumb from '@/components/breadcrumb'

export default async function Contact_Us() {
    const faqs = await client.fetch(QFaqs)


    return (
        <main>
            <MotionWrapper
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.1 }}
                className='py-20' id="contact_form">
                <div className='container mx-auto px-4'>
                    <Breadcrumb pageTitle='contact' className='mb-12' />   
                    <MotionWrapper
                        div
                        variants={fadeUp}
                        className="md:bg-white bg-sky-100 rounded-[11.14px] drop-shadow-[0_0px_30px_rgba(0,0,0,0.1)] flex md:flex-row flex-col gap-7 md:p-2 py-14">
                        <div className='bg-sky-100 md:w-1/3 w-full rounded-tr-[11.14px] rounded-tl-[11.14px] rounded-bl-[11.14px] md:p-10 px-4 flex flex-col justify-between gap-7 relative'>
                            <div>
                                <h3 className="text-sky-900 text-[31.18px] font-semibold">
                                    Contactinformatie
                                </h3>
                                <p className="opacity-80 text-neutral-900 text-xl font-normal mt-5 mb-10">
                                    Stuur ons een bericht. Wij zullen zo snel mogelijk van ons laten horen
                                </p>
                                <ul className='grid gap-7'>
                                    <li>
                                        <Link href="tel:+316 22729374" className='text-sky-900 text-lg font-normal flex gap-3 items-center'>
                                            <BiSolidPhoneCall /> +316 22729374
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="mailto:gedachteGids@gmail.com" className='text-sky-900 text-lg font-normal flex gap-3 items-center'>
                                            <BiSolidEnvelope /> GedachteGids@gmail.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className='text-sky-900 text-lg font-normal flex gap-3 items-center'>
                                            <BiSolidMap /> Wiegelstraat 10A, Amsterdam
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <ul className='flex gap-7'>
                                <li>
                                    <Link href="#" className=''>
                                        <BiLogoTwitter className="w-8 h-8 bg-black text-white hover:bg-white hover:text-black p-1 rounded-full" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className=''>
                                        <BiLogoInstagram className="w-8 h-8 bg-black text-white hover:bg-white hover:text-black p-1 rounded-full" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className=''>
                                        <BiLogoDiscordAlt className="w-8 h-8 bg-black text-white hover:bg-white hover:text-black p-1 rounded-full" />
                                    </Link>
                                </li>
                            </ul>
                            <div className='absolute bottom-0 right-0 md:block hidden'>
                                <Image src="/assets/images/bg-circle.png" alt='images/bg-circle.png' width={155} height={155} className='absolute -top-10 -left-8' />
                                <Image src="/assets/images/bg-icon.png" alt='images/bg-icon.png' width={192} height={184} className='max-w-[150px]' />
                            </div>
                        </div>
                        <div className='md:w-2/3 w-full md:py-14 py-5 md:px-12 px-4'>
                            <form className="grid md:grid-cols-2 grid-cols-1 justify-start items-start gap-[43px] mt-6">
                                <div className="w-full relative">
                                    <label htmlFor='firstName' className="text-black text-sm font-medium leading-snug">Voornaam</label>
                                    <input className="w-full py-3 bg-transparent text-neutral-400 placeholder:text-neutral-400 text-base font-medium leading-tight border-b border-neutral-400 focus:outline-0 mt-2"
                                        placeholder='John'
                                        type="text"
                                        id="firstName"
                                    />
                                </div>
                                <div className="w-full relative">
                                    <label htmlFor='lastName' className="text-black text-sm font-medium leading-snug">Last Name</label>
                                    <input className="w-full py-3 bg-transparent text-neutral-400 placeholder:text-neutral-400 text-base font-medium leading-tight border-b border-neutral-400 focus:outline-0 mt-2"
                                        placeholder='Doe'
                                        type="text"
                                        id="lastName"
                                    />
                                </div>
                                <div className="w-full relative">
                                    <label htmlFor='email' className="text-black text-sm font-medium leading-snug">Email</label>
                                    <input className="w-full py-3 bg-transparent text-neutral-400 placeholder:text-neutral-400 text-base font-medium leading-tight border-b border-neutral-400 focus:outline-0 mt-2"
                                        placeholder='JohnDoe@gmail.com'
                                        type="email"
                                        id="email"
                                    />
                                </div>
                                <div className="w-full relative">
                                    <label htmlFor='phone' className="text-black text-sm font-medium leading-snug">Telefoonnummer</label>
                                    <input className="w-full py-3 bg-transparent text-neutral-400 placeholder:text-neutral-400 text-base font-medium leading-tight border-b border-neutral-400 focus:outline-0 mt-2"
                                        placeholder='+31 612345678'
                                        type="number"
                                        id="phone"
                                    />
                                </div>
                                <div className='w-full relative md:col-span-2'>
                                    <h4 className="text-black text-base font-semibold leading-snug">
                                        Onderwerp Selecteren
                                    </h4>
                                </div>
                                <div className="w-full relative md:col-span-2 flex gap-3 items-center">
                                    <input
                                        className="h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 bg-neutral-200 checked:bg-black relative after:content-['\2713'] after:absolute after:hidden checked:after:block after:text-white after:left-auto after:text-xs"
                                        type="radio"
                                        name="opt1"
                                        id="opt1"
                                        checked />
                                    <label htmlFor='opt1' className="text-black text-sm font-medium leading-snug">Algemene Vraag</label>
                                    <input
                                        className="h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 bg-neutral-200 checked:bg-black relative after:content-['\2713'] after:absolute after:hidden checked:after:block after:text-white after:left-auto after:text-xs"
                                        type="radio"
                                        name="opt2"
                                        id="opt2"
                                    />
                                    <label htmlFor='opt2' className="text-black text-sm font-medium leading-snug">Specialist spreken</label>
                                </div>
                                <div className="w-full relative md:col-span-2">
                                    <label htmlFor='message' className="text-black text-sm font-medium leading-snug">Bericht</label>
                                    <input className="w-full py-3 bg-transparent text-neutral-400 placeholder:text-neutral-400 text-base font-medium leading-tight border-b border-neutral-400 focus:outline-0 mt-2"
                                        placeholder='Schrijf hier jouw bericht.'
                                        type="text"
                                        id="message"
                                    />
                                </div>
                                <div className='md:col-span-2 text-center'>
                                    <button type="submit" className="hover:bg-white hover:text-blue-900 hover:border-2 md:w-auto w-full py-3 px-9 mx-auto bg-sky-900 rounded-3xl text-center text-white text-[13.01px] font-semibold uppercase tracking-tight">
                                        Stuur Bericht
                                    </button>
                                </div>
                            </form>
                        </div>
                    </MotionWrapper>
                </div>
            </MotionWrapper>
            <MotionWrapper
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.1 }}
                className='py-20'>
                <div className='container mx-auto px-4'>
                    <div className='rounded-[20px] bg-sky-100 md:p-28 py-20 px-4'>
                        <div className='max-w-[795px] mx-auto'>
                            <MotionWrapper
                                elementType="h2"
                                variants={fadeUp}
                                className={`text-center text-tertairy text-[39px] font-semibold leading-[45px] mb-14 ${fontRobotoSlab.className}`}>
                                Frequently Asked Questions
                            </MotionWrapper>
                        </div>
                        <div className="bg-white rounded-[18px] shadow md:py-24 py-12 px-4">
                            <Faqs faqs={faqs}/>
                        </div>
                    </div>
                </div>
            </MotionWrapper>
        </main>
    )
}

