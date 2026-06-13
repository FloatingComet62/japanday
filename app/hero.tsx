import { Glass } from "@/components/glass";
import { Button } from "@/components/ui/button";
import { CardAction, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Hero() {
  return (
    <div className="flex w-full justify-between pl-24 pr-24 pt-2 min-h-[60vh] mb-[20vh]">
      <div className="h-full m-auto flex flex-col gap-6">
        <div className="text-xl">
          <span className="text-2xl text-orange font-bold mr-2">HACKATHON NAME HERE</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id ullamcorper ex, ut vehicula quam. Nunc quam odio, lacinia quis est vel, varius convallis dolor. 
        </div>
        <Button>Register Now</Button>
      </div>
      <div className="min-w-[50vw]">
        <div className="flex items-center justify-center h-full">
        LOGO GOES HERE
        </div>
      </div>
    </div>
  )
}
