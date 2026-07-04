import { CheckCircle2 } from "lucide-react";

export default function ProgressCard() {
  return (
    <div className="hidden w-80 rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-blue-900/10 backdrop-blur lg:block">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-500">Project Progress</p>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
          75%
        </span>
      </div>

      <div className="mt-5 h-3 rounded-full bg-slate-100">
        <div className="h-3 w-3/4 rounded-full bg-blue-600" />
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <CheckCircle2 className="h-4 w-4 text-blue-600" />
          Brief approved
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <CheckCircle2 className="h-4 w-4 text-blue-600" />
          Designer selected
        </div>

        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <CheckCircle2 className="h-4 w-4 text-blue-600" />
          Payment protected
        </div>
      </div>
    </div>
  );
}