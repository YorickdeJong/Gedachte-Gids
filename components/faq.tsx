'use client'
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Faqs_Data } from "./const/faq-data";
import { fadeUp } from "./const/anim";
import MotionWrapper from "./motion-wrapper";


export default function Faqs({faqs}:any) {
    const [open, setOpen] = useState(0);
    const handleFaq = (id: any) => {
        if (open === id) {
            return setOpen(id)
        }
        setOpen(id)
    }

    return (
        <MotionWrapper className="max-w-[813px] mx-auto divide-y ">
            {faqs.map((item: any, idx: number) => {
                return <MotionWrapper div key={idx}
                    variants={fadeUp}
                    className="w-full h-fit py-[30px]">
                    <div className="">
                        <div className="flex md:flex-row flex-row-reverse justify-between cursor-pointer" onClick={() => handleFaq(idx)}>
                            <p className="text-sky-900 md:text-[22px] text-lg font-medium leading-7 w-full" >
                                {item.title}
                            </p>
                            <span className="text-lightBlue w-7 h-7">
                                {
                                    open === idx ? (<AiOutlineMinus size={18} />) : (<AiOutlinePlus size={18} />)
                                }
                            </span>
                        </div>
                    </div>
                    <div className={`${open === idx ? 'flex' : 'hidden'} `}>
                        <p className="text-sky-900 text-lg font-normal leading-[30px] mt-5" >
                            {item.answer}
                        </p>
                    </div>
                </MotionWrapper>

            })}
        </MotionWrapper>
    );
}