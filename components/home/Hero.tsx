import FloatingCard from "@/components/home/FloatingCard";
import ProgressCard from "@/components/home/ProgressCard";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-white to-blue-50 pt-20">

      {/* Left Card */}
      <FloatingCard
        name="Sarah Chen"
        role="Brand Designer"
        location="New York, US"
        rating="5.0"
        className="absolute left-8 top-[42%] -rotate-6"
      />

      {/* Right Card */}
      <div className="absolute right-8 top-[38%] rotate-6">
        <ProgressCard />
      </div>

      <Container className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center">

        <div className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-600">
          ✨ Trusted by businesses & creatives
        </div>

        <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-7xl">
          Bring your ideas
          <br />
          to <span className="text-brand-primary">life.</span>
        </h1>

        <p className="mt-6 text-base font-medium text-slate-500 md:text-lg">
          Simple hiring • Secure payments • Exceptional design
        </p>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600 md:text-xl">
          Find trusted creatives, collaborate with confidence, and pay only
          after you're satisfied with the final result.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button className="h-16 min-w-[260px]">
            Start a Project →
          </Button>

          <Button
            variant="secondary"
            className="h-16 min-w-[260px]"
          >
            Join as a Creative
          </Button>
        </div>

        <div className="mt-14 grid gap-8 text-sm font-medium text-slate-600 sm:grid-cols-3">
          <div>Safe payments</div>
          <div>Verified creatives</div>
          <div>Fast matching</div>
        </div>

      </Container>
    </section>
  );
}