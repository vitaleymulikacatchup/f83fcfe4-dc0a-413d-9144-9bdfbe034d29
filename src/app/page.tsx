"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import TextboxStandard from '@/components/textbox/TextboxStandard';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import YearRoadmapTimeline from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';
import TimelineBase from '@/components/timeline/TimelineBase';
import ButtonHoverBubble from '@/components/buttons/ButtonHoverBubble';
import CarouselInfiniteLoop from '@/components/carousel/CarouselInfiniteLoop/CarouselInfiniteLoop';
import BentoKPIStandard from '@/components/bento/BentoKPIStandard';

const images = [
  { src: '/images/placeholder1.avif', alt: 'Car Model 1' },
  { src: '/images/placeholder2.avif', alt: 'Car Model 2' },
  { src: '/images/placeholder3.avif', alt: 'Car Model 3' },
  { src: '/images/placeholder4.avif', alt: 'Car Model 4' },
  { src: '/images/placeholder5.avif', alt: 'Car Model 5' },
  { src: '/images/placeholder6.avif', alt: 'Car Model 6' },
];

const mockTestimonials = [
  { content: 'Amazing service!', name: 'Alice' },
  { content: 'Highly recommend!', name: 'Bob' },
];

const Home = () => {
  return (
    <div>
      <section id="hero" className="bg-gradient-to-r from-[#1F8EF1] to-[#9AE6B4] py-32 text-center">
        <TextboxStandard 
          title={"Welcome to CarSprint!"}
          description={"Your one-stop shop for the best cars!"}
        />
        <ButtonHoverBubble text="Browse Inventory" onClick={() => window.scrollTo(0, document.getElementById('inventory').offsetTop)} className="mt-8" />
      </section>
      <section id="inventory" className="bg-white py-24">
        <CarouselInfiniteLoop children={
          images.map((img) => (
            <div className="relative">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <p className="font-semibold">Price: $30,000</p>
                <p>Specs: 200 HP, Manual</p>
              </div>
            </div>
          ))
        } />
      </section>
      <section id="why-us" className="bg-soft-noise py-24">
        <TimelineBase title="Why Choose Us" items={[
          { title: 'Quality', description: 'We guarantee top quality cars.' },
          { title: 'Affordability', description: 'Our prices are unbeatable!' },
          { title: 'Service', description: 'We care about our customers!' },
        ]} />
      </section>
      <section id="testimonials" className="bg-white py-24">
        <CentralFAQ 
          heading="What Our Customers Say"
          lead="See below some testimonials"
          items={mockTestimonials.map((t) => ({ title: t.content, content: t.name }))}
        />
      </section>
      <section id="how-it-works" className="bg-gradient-to-b from-[#FDF2F8] to-[#FFFFFF] py-24">
        <YearRoadmapTimeline title="How It Works" items={[
          { year: '2024', title: 'Step One', description: 'Choose your car' },
          { year: '2024', title: 'Step Two', description: 'Book a test drive' },
          { year: '2024', title: 'Step Three', description: 'Take it home!' },
        ]} />
      </section>
      <section id="cta" className="bg-white py-24">
        <h2 className="text-4xl font-bold text-center">Ready to Drive Your Dream Car?</h2>
        <form className="max-w-md mx-auto mt-8 space-y-4">
          <input type="text" placeholder="Your Name" required className="p-2 border rounded" />
          <input type="email" placeholder="Your Email" required className="p-2 border rounded" />
          <input type="text" placeholder="Preferred Car Model" required className="p-2 border rounded" />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Home;