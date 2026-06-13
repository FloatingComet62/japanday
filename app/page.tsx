import { Hero } from "./hero";
import { Stats } from "./stats";
import { About } from "./about";

export default function Home() {
  return (
    <main className="flex-grow pt-24 pb-section-gap">
      <Hero />
      <Stats />
      <About />
    </main>
  );
}
