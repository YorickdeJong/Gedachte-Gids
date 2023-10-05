'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import Brand from './brand';
import { Icons } from './icons';
import { Button } from './ui/button';
import MotionWrapper from './motion-wrapper';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();
  const { push } = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      const handleClickOutside = (event: any) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsMenuOpen(false);
          }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, [dropdownRef]);


  return (
    <section
      className={cn('bg-transparent top-0 inset-x-0 z-40 border-b-[1px] border-[#F1F1F1]', {

      })}
    >
      <nav className="container  flex items-center justify-between px-5 py-2">
        <Brand />
        <NavContent />
        {!isMenuOpen ? (
          <Icons.menu
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className="cursor-pointer lg:hidden text-primary"
          />
        ) : (
          <Icons.x
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className="cursor-pointer lg:hidden text-primary z-[11]"
          />
        )}{' '}
        <Button
          onClick={() => push('/contact')}
          className="max-lg:hidden rounded-full py-2 text-sm md:text-md"
        >
          <Icons.phone className="pr-2" />
           Vrijblijvende Afspraak
        </Button>
      </nav>

      {isMenuOpen && <NavContentMob menuRef={dropdownRef} currentPath={path || ''} setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContent = () => {
  const path = usePathname();
  return (
    <>
      <ul className="ml-16 flex items-center gap-12 max-lg:hidden">
        {siteConfig.nav.map((_) => (
          <li
            key={_.title}
            className={cn('', {
              '': _.href === '/' ? path === '/' : path?.includes(_.href),
            })}
          >
            <h3 className="capitalize text-md text-[#121212]">
              <Link href={_.href}>{_.title}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen, currentPath, menuRef }: { setIsMenuOpen: Function, currentPath: string, menuRef: any }) => {
  return (
    <MotionWrapper
      ref={menuRef}
      div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="z-[10] absolute top-0 inset-x-0 flex flex-col items-start gap-4 bg-white p-5 shadow-xl lg:hidden"
    >
      <ul>
        <Brand/>
        <div className='mt-4'>
          {siteConfig.nav.map((_) => (
            <li onClick={() => setIsMenuOpen(false)} key={_.title}>
              <h3 className={`capitalize  py-4 ${
                currentPath === _.href ? 'text-primary/50' : 'text-dark'
              }`}>
                <Link onClick={() => setIsMenuOpen(false)} href={_.href} className='hover:text-primary/50'>{_.title}</Link>
              </h3>
            </li>
        ))}
        </div>
      </ul>
    </MotionWrapper>
  );
};