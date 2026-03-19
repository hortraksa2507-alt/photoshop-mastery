"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";

const navItems = [
  {
    href: "/",
    label: "Dashboard",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    href: "/learn",
    label: "Learning Paths",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    href: "/tools",
    label: "Tools Encyclopedia",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    href: "/shortcuts",
    label: "Keyboard Shortcuts",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8" />
      </svg>
    ),
  },
  {
    href: "/challenges",
    label: "Practice Challenges",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    href: "/profile",
    label: "My Profile",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { state } = useApp();
  const user = state.user;

  return (
    <aside
      className="fixed left-0 top-0 bottom-0 w-[72px] flex flex-col items-center py-4 z-50"
      style={{ background: "var(--bg-sidebar)", borderRight: "1px solid var(--border-subtle)" }}
    >
      {/* Claude-inspired Ps Logo */}
      <Link href="/" className="mb-6 group">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-semibold text-base transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg"
          style={{
            background: "linear-gradient(135deg, #D97757 0%, #C4683E 100%)",
            fontFamily: "var(--font-body)",
            letterSpacing: "-0.5px",
            boxShadow: "0 2px 8px rgba(217, 119, 87, 0.3)",
          }}
        >
          Ps
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex flex-col items-center gap-1 flex-1">
        {navItems.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className="sidebar-tooltip" data-tooltip={item.label}>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: isActive ? "var(--accent-primary)" : "transparent",
                  color: isActive ? "#fff" : "var(--text-sidebar)",
                  boxShadow: isActive ? "0 2px 8px rgba(217, 119, 87, 0.25)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "var(--bg-sidebar-hover)";
                    e.currentTarget.style.color = "var(--text-sidebar-active)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--text-sidebar)";
                  }
                }}
              >
                {item.icon}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* User avatar */}
      <Link href="/profile" className="sidebar-tooltip" data-tooltip={user?.firstName || "Profile"}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold overflow-hidden"
          style={{
            background: user?.photoUrl ? "transparent" : "var(--accent-primary)",
            color: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          {user?.photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={user.photoUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            user?.firstName?.charAt(0).toUpperCase() || "?"
          )}
        </div>
      </Link>
    </aside>
  );
}
