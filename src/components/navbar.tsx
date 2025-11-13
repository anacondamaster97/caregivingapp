'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const NavbarHome = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {

    e.preventDefault();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  const router = useRouter();

  return (
    <header className="sticky top-2 md:top-8 z-50 flex items-center justify-between px-4 md:px-12 py-3 md:py-4 w-[95%] md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto rounded-xl backdrop-blur-sm shadow-sm opacity-90 border border-pink-200 bg-pink-50">
      <div className="flex items-center gap-2">

        <a href="/" className="text-lg md:text-2xl font-light text-gray-900 animate-shimmer">CareGiving</a>
        {/* <Image src="/icon.png" alt="HelpingHome" width={16} height={16} className="animate-shimmer" /> */}
      </div>
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        <a onClick={(e) => handleScroll(e, 'how-it-works')} href="#how-it-works" className="text-gray-700 hover:text-gray-900 text-sm">How It Works</a>
        <a onClick={(e) => handleScroll(e, 'in-home-care')} href="#in-home-care" className="text-gray-700 hover:text-gray-900 text-sm">Care Agencies</a>
        <a onClick={(e) => handleScroll(e, 'care-facilities')} href="#care-facilities" className="text-gray-700 hover:text-gray-900 text-sm">Facilities</a>
        {/* <a onClick={(e) => handleScroll(e, 'about')} href="#about" className="text-gray-700 hover:text-gray-900 text-sm">About Us</a> */}
      </nav>
      <div className="flex items-center gap-4">
        {/*  <button className="text-gray-700 hover:text-gray-900">Log In</button> */}
        <a className="flex flex-row bg-pink-500 hover:bg-pink-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base whitespace-nowrap" href="/questions">
          Get Started
        </a>
      </div>
    </header>
  );
};

export const Navbar = () => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
      <div className="flex items-center gap-2">
        {/* <Image src="/logo.png" alt="HelpingHome" width={32} height={32} /> */}
        <a className="text-xl font-light text-gray-900" href="/">CareGiving</a>

      </div>
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/#how-it-works" className="text-gray-700 hover:text-gray-900">How It Works</Link>
        <Link href="/#in-home-care" className="text-gray-700 hover:text-gray-900">Care Agencies</Link>
        <Link href="/#care-facilities" className="text-gray-700 hover:text-gray-900">Facilities</Link>
        {/* <a href="#" className="text-gray-700 hover:text-gray-900">Resources</a> */}
        {/* <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a> */}
      </nav>
      <div className="flex items-center gap-4">
        {/* <button className="text-gray-700 hover:text-gray-900">Log In</button> */}
        <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full" onClick={() => router.push('/questions')}>
          Get Started
        </Button>
      </div>
    </header>
  );
};