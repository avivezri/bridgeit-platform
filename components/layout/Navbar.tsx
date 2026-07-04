import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">

        <Logo />

        <nav className="hidden lg:flex items-center gap-12 text-[15px] font-medium text-slate-700">
          <a href="#" className="transition hover:text-blue-600">
            How it works
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Find Creatives
          </a>

          <a href="#" className="transition hover:text-blue-600">
            About
          </a>
        </nav>

        <button className="text-[15px] font-medium text-slate-700 transition hover:text-blue-600">
          Log in
        </button>

      </Container>
    </header>
  );
}