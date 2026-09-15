"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Activity,
  Map as MapIcon,
  Satellite,
  Archive,
  FileText,
  Server,
  Settings,
} from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Overview", href: "/", icon: LayoutDashboard },
  { name: "Monitor", href: "/monitor", icon: Activity },
  { name: "Forecast", href: "/forecast", icon: MapIcon },
  { name: "Satellite", href: "/satellite", icon: Satellite },
  { name: "Archive", href: "/archive", icon: Archive },
  { name: "Reports", href: "/reports", icon: FileText },
];

const bottomNavItems = [
  { name: "System Status", href: "/system-status", icon: Server },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-full text-slate-300">
      <div className="h-16 flex items-center px-6 border-b border-slate-800 shrink-0">
        <div className="flex items-center gap-3 text-white font-bold text-lg tracking-wide">
          <div className="w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center shrink-0">
            <span className="text-white text-sm">CX</span>
          </div>
          CycloneX
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
          Operations
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors",
                isActive
                  ? "bg-sky-600/10 text-sky-400 font-medium"
                  : "hover:bg-slate-800 hover:text-white"
              )}
            >
              <item.icon className={clsx("w-5 h-5", isActive ? "text-sky-400" : "text-slate-400")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-slate-800">
        <div className="flex flex-col gap-1">
          {bottomNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-sky-600/10 text-sky-400 font-medium"
                    : "hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon className={clsx("w-5 h-5", isActive ? "text-sky-400" : "text-slate-400")} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
