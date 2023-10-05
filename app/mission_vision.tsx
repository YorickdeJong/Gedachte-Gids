import { fadeUp } from "@/components/const/anim";
import { Images } from "@/components/images";
import MotionWrapper from "@/components/motion-wrapper";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";





export default function MissionVision() {
    
    
    return (
        <MotionWrapper
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
        className="container py-36">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 gap-y-60">
                <div className="flex justify-center flex-col">
                    <Typography variant='title' className="text-tertairy max-w-[550px]">
                        Creër een Leven dat Overeenkomt met Jouw Waarden en Passies
                    </Typography>

                    <Typography variant='muted' className="text-dark mt-6 max-w-[550px]">
                        Gedachte Gids is opgericht door een team van gepassioneerde en ervaren levenscoaches
                        die geloven in de kracht van persoonlijke transformatie. We bieden een reeks
                        diensten aan om je innerlijke vuur aan te wakkeren en een leven te creëren dat je liefhebt.
                    </Typography>
                    
                </div>
                <MotionWrapper div  variants={fadeUp} className="group relative">
                    <Link href = '/blog'>
                        <Images.mission_bg_1 className="absolute top-0 right-0 w-full h-full mission-bg-1-animate" />
                        <Images.mission_bg_2 className="absolute top-10 left-0 w-full h-full mission-bg-2-animate" />
                        <Images.mission_vission_2 className="relative md:h-[500px] md:w-[580px] h-[400px] w-[500px] z-[3]" />
                        <div className='absolute group-hover:inline-flex hidden top-[-50px] left-[30%]'>
                                <Typography variant = 'muted' className='text-primary font-bold'>Lees meer in onze blogs</Typography>
                        </div>
                    </Link>
                </MotionWrapper>

                <MotionWrapper div key = {2} variants={fadeUp} className="group relative">
                    <Link href = '/about'>
                        <Images.mission_bg_1 className="absolute top-0 right-0 w-full h-full mission-bg-3-animate" />
                        <Images.mission_bg_2 className="absolute top-10 left-0 w-full h-full mission-bg-4-animate" />
                        <Images.mission_vission_1 className="relative md:h-[500px] md:w-[580px] h-[400px] w-[500px] z-[3]" />
                        <div className='absolute group-hover:inline-flex hidden top-[-50px] left-[30%]'>
                            <Typography variant = 'muted' className='text-primary font-bold'>Bekijk onze Missie en Visie</Typography>
                        </div>
                    </Link>
                </MotionWrapper>

                <div className="flex justify-center  flex-col md:ml-20">
                    <Typography variant='title' className="text-tertairy">
                    Onze Missie en Visie
                    </Typography>

                    <Typography variant='muted' className="text-dark mt-6">
                    We streven ernaar verbindingen te leggen en zowel geestelijke gezondheidsprofessionals als
                    individuen te versterken om mentaal welzijn te bereiken. Met een team van ervaren en meelevende 
                    experts zetten we ons in om een positieve impact te hebben op uw reis naar geestelijke gezondheid.
                    </Typography>
                    
                </div>
            </div>
        </MotionWrapper>
    )
}