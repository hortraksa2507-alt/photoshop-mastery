"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { useState, useEffect } from "react";

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
    label: "Shortcuts",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M8 16h8" />
      </svg>
    ),
  },
  {
    href: "/challenges",
    label: "Challenges",
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close mobile sidebar on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile hamburger button */}
      {isMobile && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed top-3 left-3 z-50 w-10 h-10 rounded-lg flex items-center justify-center transition-all active:scale-95"
          style={{ background: "var(--bg-sidebar)", border: "1px solid var(--border-subtle)" }}
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      )}

      {/* Mobile overlay */}
      {isMobile && (
        <div
          className={`mobile-overlay ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className="fixed left-0 top-0 bottom-0 flex flex-col items-center py-4 z-50 transition-transform duration-300"
        style={{
          width: isMobile ? "200px" : "72px",
          background: "var(--bg-sidebar)",
          borderRight: "1px solid var(--border-subtle)",
          transform: isMobile && !mobileOpen ? "translateX(-100%)" : "translateX(0)",
        }}
      >
        {/* Header: PS Logo + close on mobile */}
        <div className={`flex items-center ${isMobile ? "w-full px-4 justify-between" : ""} mb-6`}>
          <Link href="/" className="group">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-base transition-all group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #001E36 0%, #31A8FF 100%)",
                fontFamily: "var(--font-body)",
                letterSpacing: "-0.5px",
                boxShadow: "0 2px 8px rgba(45, 140, 255, 0.3)",
              }}
            >
              Ps
            </div>
          </Link>
          {isMobile && (
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ color: "var(--text-tertiary)" }}
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Nav */}
        <nav className={`flex flex-col ${isMobile ? "w-full px-3" : "items-center"} gap-1 flex-1`}>
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isMobile ? "" : "sidebar-tooltip"}
                data-tooltip={item.label}
              >
                <div
                  className={`${isMobile ? "flex items-center gap-3 px-3 py-2.5 rounded-lg" : "w-10 h-10 rounded-lg flex items-center justify-center"} transition-all duration-200`}
                  style={{
                    background: isActive ? "var(--accent-primary)" : "transparent",
                    color: isActive ? "#fff" : "var(--text-sidebar)",
                    boxShadow: isActive ? "0 2px 8px rgba(45, 140, 255, 0.25)" : "none",
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
                  {isMobile && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* User avatar */}
        <Link
          href="/profile"
          className={isMobile ? "w-full px-3 mb-2" : "sidebar-tooltip"}
          data-tooltip={user?.firstName || "Profile"}
        >
          <div
            className={`${isMobile ? "flex items-center gap-3 px-3 py-2.5 rounded-lg" : "w-9 h-9 rounded-full flex items-center justify-center"} text-xs font-bold overflow-hidden`}
            style={{
              background: user?.photoUrl ? "transparent" : "var(--accent-primary)",
              color: "#fff",
              boxShadow: isMobile ? "none" : "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold overflow-hidden flex-shrink-0"
              style={{
                background: user?.photoUrl ? "transparent" : "var(--accent-primary)",
                color: "#fff",
              }}
            >
              {user?.photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={user.photoUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                user?.firstName?.charAt(0).toUpperCase() || "?"
              )}
            </div>
            {isMobile && (
              <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                {user?.firstName || "Profile"}
              </span>
            )}
          </div>
        </Link>
      </aside>
    </>
  );
}
