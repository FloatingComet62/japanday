import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function InterestedCompany() {
  return (
    <div id="problem_statements" className="py-24 flex flex-col items-center gap-4 text-2xl">
      <div className="text-8xl font-bold">Interested as a Company?</div>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="w-1/2 text-4xl p-12">Register Now</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Company Registeration</SheetTitle>
            <SheetDescription>Register your company for HACKATHON NAME HERE!</SheetDescription>
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
            <SheetClose className="flex flex-col w-full gap-2" asChild>
              <Button>
                Register
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
