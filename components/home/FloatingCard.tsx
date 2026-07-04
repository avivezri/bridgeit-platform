import { MapPin, Star } from "lucide-react";

type FloatingCardProps = {
  name: string;
  role: string;
  location: string;
  rating: string;
  className?: string;
};

export default function FloatingCard({
  name,
  role,
  location,
  rating,
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`hidden w-72 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur lg:block ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-lg font-bold text-blue-600">
          SC
        </div>

        <div className="text-left">
          <div className="mb-1 flex items-center gap-1 text-sm font-bold text-amber-500">
            <Star className="h-4 w-4 fill-amber-500" />
            {rating}
          </div>

          <h3 className="text-base font-bold text-slate-950">{name}</h3>
          <p className="text-sm font-medium text-slate-700">{role}</p>

          <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
            <MapPin className="h-3.5 w-3.5" />
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}