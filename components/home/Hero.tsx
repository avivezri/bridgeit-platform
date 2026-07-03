import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white via-white to-blue-50 px-6 pt-28 text-center">
      <p className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
        Less Hassle. More Creativity.
      </p>

      <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-7xl">
        Bring your ideas
        <br />
        to life.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
        Connect with trusted designers, manage your project simply,
        <br className="hidden sm:block" />
        and pay only when you're satisfied.
      </p>

      <div className="mt-12 flex flex-col gap-5 sm:flex-row">
        <Button>
          Tell us what you need →
        </Button>

        <Button variant="secondary">
          I'm a Designer →
        </Button>
      </div>
    </section>
  );
}