"use client";
import Image from 'next/image';
import Link from 'next/link';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import BentoMediaGallery from '@/components/bento/BentoMediaGallery/BentoMediaGallery';
import TextboxStandard from '@/components/textbox/TextboxStandard';
import TextboxContentRich from '@/components/textbox/TextboxContentRich';
import TimelineProcessFlow from '@/components/timelines/TimelineProcessFlow';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import ButtonTextStagger from '@/components/buttons/ButtonTextStagger/ButtonTextStagger';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-[linear-gradient(135deg,#1F8EF1_0%,#9AE6B4_100%)] py-20 flex flex-col items-center">
        <BillboardHero title="Welcome to CarSprint" subtitle="Your adventure starts here!" />
      </section>
      <section id="inventory" className="bg-white py-20">
        <BentoMediaGallery items={[
          { title: "Car 1", image: "/images/placeholder1.avif" },
          { title: "Car 2", image: "/images/placeholder2.avif" },
          { title: "Car 3", image: "/images/placeholder3.avif" },
          { title: "Car 4", image: "/images/placeholder4.avif" },
          { title: "Car 5", image: "/images/placeholder5.avif" },
          { title: "Car 6", image: "/images/placeholder6.avif" }
        ]} className="max-w-7xl mx-auto" />
      </section>
      <section id="why-us" className="bg-soft-noise py-20">
        <TextboxStandard title={<h2>Why Choose Us?</h2>} description={<p>We are dedicated to delivering the best car buying experience with unmatched quality and service.</p>} />
      </section>
      <section id="testimonials" className="bg-white py-20">
        <CentralFAQ items={[
          { title: "Best service ever!", content: "Had a fantastic experience buying my car at CarSprint! Highly recommended." },
          { title: "Awesome selection!", content: "They have the best inventory of cars and great prices!" }
        ]} />
      </section>
      <section id="how-it-works" className="bg-[linear-gradient(180deg,#FDF2F8,#FFFFFF)] py-20">
        <TimelineProcessFlow items={[
          { id: "1", title: "Select Your Car", description: "Choose from our extensive inventory of cars.", image: "/images/placeholder7.avif", items: [], reverse: false },
          { id: "2", title: "Complete Paperwork", description: "Easy paperwork to get you on the road quickly.", image: "/images/placeholder1.avif", items: [], reverse: true },
          { id: "3", title: "Drive Away in Style", description: "Enjoy your new car and drive away with confidence!", image: "/images/placeholder2.avif", items: [], reverse: false }
        ]} className="max-w-7xl mx-auto" />
      </section>
      <section id="cta" className="bg-white py-20">
        <TextboxContentRich title={<h2>Ready to Drive Your Dream Car?</h2>} description={<p>Fill out the form below, and we’ll get back to you shortly!</p>}> 
          <ButtonTextStagger text="Contact Us" onClick={() => alert('Contact form submitted!')} className="bg-primary text-white py-2 px-4 rounded" />
        </TextboxContentRich>
      </section>
    </SiteThemeProvider>
  );
}