'use client';

import { HTMLAttributes } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Images } from '@/components/images';
import Motion from '@/components/motion';

interface PersonProps extends HTMLAttributes<HTMLDivElement> {}

export default function Person({ className, ...props }: PersonProps) {
  const { scrollY } = useScroll();
  const x1 = useTransform(scrollY, [0, 1000], [0, -1000]);
  const x2 = useTransform(scrollY, [0, 1000], [0, 1000]);
  const x3 = useTransform(scrollY, [0, 1400], [0, -1400]);
  const x4 = useTransform(scrollY, [0, 1400], [0, 1400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  return (
    <>
      <div
        className={cn(
          'grid grid-cols-2 [&_img]:w-full [&_img]:object-cover',
          className,
          {}
        )}
        {...props}
      >
        <Motion style={{ x: x1 }}>
          <Images.person1 />
        </Motion>
        <Motion style={{ x: x2 }}>
          <Images.person2 />
        </Motion>
        <Motion style={{ x: x3 }}>
          <Images.person1 className="rotate-12" />
        </Motion>
        <Motion style={{ x: x4 }}>
          <Images.person2 />
        </Motion>
      </div>{' '}
      {/* @ts-ignore */}
      <Motion style={{ opacity }}>
        <Images.capsule />
      </Motion>
    </>
  );
}