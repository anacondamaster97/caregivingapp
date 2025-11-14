'use client';

import { useRouter } from 'next/navigation';
import { Button } from './ui/button'; // Assuming you have this component
import Link from 'next/link';

export const NavbarHome = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  const router = useRouter();

  return (
    <header className="sticky top-2 md:top-8 z-50 flex items-center justify-between px-4 md:px-12 py-3 md:py-4 w-[95%] md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto rounded-xl backdrop-blur-sm shadow-sm opacity-90 border bg-accent border-border">
      {/* CHANGES:
        - Replaced 'border-pink-200' with 'border-border'
        - Replaced 'bg-pink-50' with 'bg-accent' (This is the semantic match)
      */}
      <div className="flex items-center gap-2">
        <a href="/" className="text-lg md:text-2xl font-light text-foreground animate-shimmer">
          {/* CHANGED: 'text-gray-900' to 'text-foreground' */}
          CareGiving
        </a>
        {/* <Image src="/icon.png" alt="HelpingHome" width={16} height={16} className="animate-shimmer" /> */}
      </div>
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        {/* CHANGES:
          - Replaced 'text-gray-700' with 'text-muted-foreground'
          - Replaced 'hover:text-gray-900' with 'hover:text-foreground'
        */}
        <a onClick={(e) => handleScroll(e, 'how-it-works')} href="#how-it-works" className="text-muted-foreground hover:text-foreground text-sm">
          How It Works
        </a>
        <a onClick={(e) => handleScroll(e, 'in-home-care')} href="#in-home-care" className="text-muted-foreground hover:text-foreground text-sm">
          Care Agencies
        </a>
        <a onClick={(e) => handleScroll(e, 'care-facilities')} href="#care-facilities" className="text-muted-foreground hover:text-foreground text-sm">
          Facilities
        </a>
        {/* <a onClick={(e) => handleScroll(e, 'about')} href="#about" className="text-gray-700 hover:text-gray-900 text-sm">About Us</a> */}
      </nav>
      <div className="flex items-center gap-4">
        {/* <button className="text-gray-700 hover:text-gray-900">Log In</button> */}
        <a
          className="flex flex-row bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base whitespace-nowrap"
          href="/questions"
        >
          {/* CHANGES:
            - Replaced 'bg-pink-500' with 'bg-primary'
            - Replaced 'hover:bg-pink-600' with 'hover:bg-primary/90' (Tailwind's opacity modifier is a common way to darken)
            - Replaced 'text-white' with 'text-primary-foreground'
          */}
          Get Started
        </a>
      </div>
    </header>
  );
};

export const Navbar = () => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-border">
      {/* CHANGED: 'border-gray-100' to 'border-border' */}
      <div className="flex items-center gap-2">
        {/* <Image src="/logo.png" alt="HelpingHome" width={32} height={32} /> */}
        <a className="text-xl font-light text-foreground" href="/">
          {/* CHANGED: 'text-gray-900' to 'text-foreground' */}
          CareGiving
        </a>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        {/* CHANGES:
          - Replaced 'text-gray-700' with 'text-muted-foreground'
          - Replaced 'hover:text-gray-900' with 'hover:text-foreground'
        */}
        <Link href="/#how-it-works" className="text-muted-foreground hover:text-foreground">
          How It Works
        </Link>
        <Link href="/#in-home-care" className="text-muted-foreground hover:text-foreground">
          Care Agencies
        </Link>
        <Link href="/#care-facilities" className="text-muted-foreground hover:text-foreground">
          Facilities
        </Link>
        {/* <a href="#" className="text-gray-700 hover:text-gray-900">Resources</a> */}
        {/* <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a> */}
      </nav>
      <div className="flex items-center gap-4">
        {/* <button className="text-gray-700 hover:text-gray-900">Log In</button> */}
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full" onClick={() => router.push('/questions')}>
          {/* CHANGES:
            - Replaced 'bg-pink-500' with 'bg-primary'
            - Replaced 'hover:bg-pink-600' with 'hover:bg-primary/90'
            - Replaced 'text-white' with 'text-primary-foreground'
          */}
          Get Started
        </Button>
      </div>
    </header>
  );
};