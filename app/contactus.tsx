import { Glass } from "@/components/glass";
import Image from "next/image";

export function ContactUs() {
  return (
    <div id="problem_statements" className="py-24 flex flex-col items-center gap-4">
      <div className="text-8xl font-bold">Contact Us</div>
      <div className="flex gap-4 w-full p-4 items-center justify-evenly">
      {["Vinay Sir", "Kazuma Sir"].map(name => (
        <Glass key={`contact-${name}`} variant="frost" className="flex flex-col gap-2 p-4 items-center">
          <Image src="/temp_pfp.png" alt={name} width={80} height={120} className="border-black border-2 !rounded-2xl mt-4" />
          <div className="text-2xl font-bold">{name}</div>
        </Glass>
      ))}
      </div>
    </div>
  );
}
