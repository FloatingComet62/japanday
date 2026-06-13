import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { Stats } from "./stats";
import { About } from "./about";
import { Footer } from "./footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow pt-24 pb-section-gap">
        <Hero />
        <Stats />
        <About />
      </main>

      <Footer />

      {/* Sticky Partner CTA for mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant/30 p-4 md:hidden z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Button className="w-full h-auto rounded-[2px] bg-primary-container px-6 py-4 text-button font-button text-on-primary hover:bg-primary">
          Partner with us
        </Button>
      </div>
    </>
  );
}
