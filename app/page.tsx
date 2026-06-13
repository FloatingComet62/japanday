import { AboutJapanDayHack } from "@/about_japan_day_hack";
import { AboutTSLAS } from "./about_tslas";
import { Hero } from "./hero";
import { Navbar } from "./navbar";
import { ProblemStatements } from "./problem_statements";
import { Timeline } from "./timeline";
import { OnboardedCompanies } from "./onboarded_comapnies";
import { InterestedCompany } from "./interested_company";
import { ContactUs } from "./contactus";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-[100vh]">
      <Navbar />
      <Hero />
      <Timeline />
      <ProblemStatements />
      <AboutTSLAS />
      <AboutJapanDayHack />
      <OnboardedCompanies />
      <InterestedCompany />
      <ContactUs />
    </div>
  )
}
