import Logo from "@/components/ui/Logo";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-slate-100 bg-white/80 px-8 py-5 backdrop-blur">
      <Logo />

      <div className="hidden items-center gap-8 text-sm font-medium text-slate-800 md:flex">
        <a>How it works</a>
        <a>Find designers</a>
        <a>About us</a>
        <a>Log in</a>

        <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20">
          Sign up
        </button>
      </div>
    </nav>
  );
}