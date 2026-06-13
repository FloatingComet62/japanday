import { Button } from "@/components/ui/button";
import { TooltipContent, Tooltip, TooltipTrigger } from "@/components/ui/tooltip";

export function Hero() {
  return (
    <div className="flex w-full justify-between pl-24 pr-24 pt-2 min-h-[80vh] mb-[20vh]">
      <div className="h-full m-auto flex flex-col gap-6">
        <div className="text-3xl">
          <span className="text-6xl text-orange font-bold mr-2">HACKATHON NAME HERE</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id ullamcorper ex, ut vehicula quam. Nunc quam odio, lacinia quis est vel, varius convallis dolor. 
        </div>
       <Tooltip>
          <TooltipTrigger asChild>
            <Button className="w-full text-4xl p-12">Register Now</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>just wait</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="min-w-[50vw]">
        <div className="flex items-center justify-center h-full">
        LOGO GOES HERE
        </div>
      </div>
    </div>
  )
}
