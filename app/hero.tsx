import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Hero() {
  return (
    <div className="flex w-full justify-between pl-24 pr-24 pt-2 min-h-[80vh] mb-[20vh]">
      <div className="h-full m-auto flex flex-col gap-6">
        <div className="text-xl">
          <span className="text-2xl text-orange font-bold mr-2">HACKATHON NAME HERE</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id ullamcorper ex, ut vehicula quam. Nunc quam odio, lacinia quis est vel, varius convallis dolor. 
        </div>
        <Sheet>
          <SheetTrigger>
            <Button className="w-full">Register Now</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Registration</SheetTitle>
              <SheetDescription>Sign up for HACKATHON NAME HERE!</SheetDescription>
            </SheetHeader>
            <div className="ml-6 mr-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name" className="font-bold">Name</Label>
                <Input id="name" className="rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="font-bold">Email</Label>
                <Input id="email" className="rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone_number" className="font-bold">Phone Number</Label>
                <Input id="phone_number" className="rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="company_name" className="font-bold">Company Name</Label>
                <Input id="company_name" className="rounded-md" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="location" className="font-bold">Location</Label>
                <Input id="location" className="rounded-md" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose className="flex flex-col w-full gap-2">
                <Button>Register</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="min-w-[50vw]">
        <div className="flex items-center justify-center h-full">
        LOGO GOES HERE
        </div>
      </div>
    </div>
  )
}
