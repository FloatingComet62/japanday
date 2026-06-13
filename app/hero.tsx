import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-pattern overflow-hidden px-margin-mobile md:px-margin-desktop">
      <div className="absolute inset-0 bg-gradient-to-br from-surface-container-lowest/80 to-surface-container-low/50 z-0" />

      <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter w-full">
        <div className="md:col-span-8 flex flex-col justify-center">
          <span className="font-label-caps text-label-caps text-faint uppercase tracking-widest mb-6 block">
            Annual Innovation Summit
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
            Japan Day Hack
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10 border-l-4 border-primary pl-6 py-2">
            Where Japanese industry meets student innovation. Bridging
            traditional corporate excellence with high-energy technical talent.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="h-auto rounded-[2px] bg-primary-container px-8 py-4 text-button font-button text-on-primary hover:bg-primary ambient-shadow">
              Partner with us
            </Button>
            <Button
              variant="outline"
              className="h-auto rounded-[2px] border-on-secondary-fixed bg-transparent px-8 py-4 text-button font-button text-on-secondary-fixed hover:bg-surface-container-highest"
            >
              View Challenges
            </Button>
          </div>
        </div>

        <div className="hidden md:flex md:col-span-4 items-center justify-center">
          <Logo className="w-64 h-64" />
        </div>
      </div>

      {/* Red accent circle behind text */}
      <div className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl z-0 pointer-events-none" />
    </section>
  );
}
