"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Bell, Search, User } from "lucide-react";

export function TopBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 shrink-0 text-slate-300">
      <div className="flex items-center flex-1">
        <div className="relative w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search cyclones, regions, or coordinates..."
            className="w-full bg-slate-800 border-none rounded-md py-1.5 pl-9 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            System Nominal
          </span>
        </div>

        <div className="h-4 w-px bg-slate-800" />

        <div className="text-sm font-mono tracking-wider text-slate-400" suppressHydrationWarning>
          {format(time, "HH:mm:ss 'UTC'")}
        </div>

        <div className="h-4 w-px bg-slate-800" />

        <button className="relative p-1.5 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-sky-500 border-2 border-slate-900" />
        </button>

        <button className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
          <User className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
