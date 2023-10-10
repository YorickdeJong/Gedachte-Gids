'use client'

import { fadeUp } from "@/components/const/anim";
import { Icons } from "@/components/icons";
import { Images } from "@/components/images";
import MotionWrapper from "@/components/motion-wrapper";
import { Typography } from "@/components/ui/typography";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";


export default function WellnessSection() {
    const containerRef = useRef(null);
    const [svgheight, setSvgHeight] = useState(0);
    const [colorValue, setColorValue] = useState(0);

    const { scrollYProgress,  } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });
    
    const smoothScrollYProgress = useSpring(scrollYProgress, { stiffness: 85, damping: 20 });



    useEffect(() => {
        const unsubscribe = smoothScrollYProgress.on('change', value => {
            if (value < 0.5) {
                setSvgHeight(value)
                setColorValue(value)
            }
            else {
                setSvgHeight(1 - value)
                setColorValue(value)
            }
        });
    
        return () => {
            unsubscribe();
        };
    }, [scrollYProgress]);

    const interpolateColor = (value : any) => {
        const r = Math.floor(227 -  value * 80);
        const g = Math.floor(241 - value * 34);
        const b = Math.floor(255 );
        return `rgb(${r},${g},${b})`;
    };

    const color = interpolateColor(svgheight);
    
    return (
        <MotionWrapper 
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
        style = {{translateY: svgheight * 100 }}
        className="my-12 mt-24">
            <CurveSVG 
            height={svgheight}
            fillColor={color}
            />
            <div className="bg-secondary"
            ref={containerRef}
            style={{ backgroundColor: color,  }}
            >
                <MotionWrapper style= {{translateY: -svgheight * 150}} className="container grid grid-cols-1 md:grid-cols-2 gap-20 py-24">
                    <MotionWrapper key={1} div variants={fadeUp} className="mt-12">
                        <Images.diensten_hero className = 'diensten-animate'/>
                    </MotionWrapper>
                    <div>
                        <Typography variant = 'title' className="text-tertairy">Welkom bij Gedacht Gids - Jouw Pad naar Mentaal welzijn</Typography>
                        <div className="grid grid-cols-1 gap-10 mt-8 ">
                            <div className="mt-8 ">
                                <Typography variant = 'muted' className="text-primary flex flex-row text-lg lg:text-2xl hove:scale-105 hover:font-bold"><Icons.checkmark className="mr-4 "/>Eén-op-Eén Coaching</Typography>
                                <Typography variant = 'muted' className="text-dark mt-4">
                                    Onze ervaren coaches bieden
                                    gepersonaliseerde één-op-één coaching om
                                    je te helpen je doelen te bereiken.
                                </Typography>
                            </div>

                            <div className="mt-8">
                                <Typography variant = 'muted' className="text-primary flex flex-row text-lg lg:text-2xl hove:scale-105 hover:font-bold"><Icons.checkmark className="mr-4"/>Mindfulness Training</Typography>
                                <Typography variant = 'muted' className="text-dark mt-4">
                                    Leer stress te verminderen, de focus te verbeteren en
                                    innerlijke rust te cultiveren met ons mindfulness-
                                    trainingsprogramma.
                                </Typography>
                            </div>

                            <div className="mt-8">
                                <Typography variant = 'muted' className="text-primary flex flex-row text-lg lg:text-2xl hove:scale-105 hover:font-bold"><Icons.checkmark className="mr-4"/>Groepscoaching</Typography>
                                <Typography variant = 'muted' className="text-dark mt-4">
                                    Sluit je aan bij onze ondersteunende gemeenschap van
                                    gelijkgestemde individuen en ontvang groepscoaching om inzichten te verkrijgen.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </MotionWrapper>
        </div>
        <InverseCurveSVG 
        fillColor={color}
        />
        </MotionWrapper>    
    )
}

const CurveSVG = ({ height, fillColor }: { height: any, fillColor: string }) => (
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full mb-[-1px]"
    style={{ height: 80 + height * 1000 }}
    > 
      <path d="M0,100 C720,0 720,0 1440,100 L1440,100 L0,100" fill={fillColor}></path>
    </svg>
);

const InverseCurveSVG = ({fillColor } : any) => (
<svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-20 mt-[-1px]">
    <path d="M0,0 C720,100 720,100 1440,0 L1440,0 L0,0" fill={fillColor}></path>
</svg>
);