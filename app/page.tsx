import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { ProblemStatements } from "./problem_statements";
import { Timeline } from "./timeline";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-[100vh]">
      <Navbar />
      <Hero />
      <Timeline />
      <ProblemStatements />
    </div>
  )
}
