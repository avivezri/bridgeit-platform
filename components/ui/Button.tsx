type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-brand-primary text-white shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 hover:bg-brand-primary-hover hover:shadow-xl",

    secondary:
      "border border-border-soft bg-white text-slate-900 hover:bg-slate-50 hover:-translate-y-0.5",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}