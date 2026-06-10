import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-full bg-white">
      <Navbar />
      <Hero />
    </div>
  )
}
