import { Glass } from "@/components/glass";
import { Button } from "@/components/ui/button";
import { CardAction, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Hero() {
  return (
    <div className="flex w-full justify-evenly pl-6 pr-6 pt-2">
      <div className="flex items-center justify-center">
        HACKATHON NAME HERE
      </div>
      <Glass variant="frost" className="p-4 w-[30vw] flex flex-col items-center">
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id ullamcorper ex, ut vehicula quam. Nunc quam odio, lacinia quis est vel, varius convallis dolor. Sed molestie porttitor augue, a molestie lorem venenatis at. Proin vel risus elit. Pellentesque vulputate auctor mi in consequat. Integer eget ex sit amet lorem feugiat facilisis eu a lacus.
          <form className="mt-6">
            <Label htmlFor="email" className="mb-2">Email</Label>
            <Input
              className="mb-2 rounded-lg"
              id="email"
              type="email"
              required
            />
            <Label htmlFor="phone" className="mt-2 mb-2">Phone</Label>
            <Input
              className="rounded-lg"
              id="phone"
              type="number"
              required
            />
          </form>
        </CardContent>
        <CardAction className="flex w-full items-center justify-center">
          <Button className="w-full cursor-pointer rounded-xl">Register</Button>
        </CardAction>
      </Glass>
    </div>
  )
}
