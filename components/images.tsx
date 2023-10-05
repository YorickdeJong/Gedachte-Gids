import Image from 'next/image';


export const Images =  {
    logo: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/gedachte_gids_header_1.png`} //add image path here
        alt="    "
        width={200}
        height={300}
      />
    ),
    hero_bg_1: (props: any) => (
      <Image
        {...props}
        src={`/assets/svg/bg_bottom.svg`} //add image path here
        alt="    "
        width={500}
        height={300}
      />
    ),
    hero_bg_2: (props: any) => (
      <Image
        {...props}
        src={`/assets/svg/bg_top.svg`} //add image path here
        alt="    "
        width={500}
        height={300}
      />
    ),
    mission_bg_1: (props: any) => (
      <Image
        {...props}
        src={`/assets/svg/mission_bg_1.svg`} //add image path here
        alt="    "
        width={500}
        height={300}
      />
    ),
    mission_bg_2: (props: any) => (
      <Image
        {...props}
        src={`/assets/svg/mission_bg_2.svg`} //add image path here
        alt="    "
        width={500}
        height={300}
      />
    ),
    hero_1_min: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/hero_1-min.png`} //add image path here
        alt="    "
        width={1000}
        height={300}
      />
    ),
    diensten_hero: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/diensten-hero.png`} //add image path here
        alt="    "
        width={1000}
        height={300}
      />
    ),
    mission_vission_1: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/mission_vision_1.png`} //add image path here
        alt="    "
        width={1000}
        height={300}
      />
    ),
    mission_vission_2: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/mission_vision_3.png`} //add image path here
        alt="    "
        width={1000}
        height={500}
      />
    ),
    quotes: (props: any) => (
      <Image
        {...props}
        src={`/assets/images/quotes.png`} //add image path here
        alt="    "
        width={150}
        height={500}
      />
    ),

};
