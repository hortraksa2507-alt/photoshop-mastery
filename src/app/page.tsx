"use client";

import ProgressRing from "@/components/ProgressRing";
import Onboarding from "@/components/Onboarding";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { IconBook, IconClock, IconUnlock, IconFire, IconBrush, IconLayers, IconColorWheel, IconWand } from "@/components/PsIcons";

const featuredLessons = [
  { title: "Mastering Layer Masks", category: "Compositing", level: "Intermediate", duration: "18 min", Icon: IconLayers, color: "var(--level-intermediate)" },
  { title: "Non-Destructive Editing", category: "Fundamentals", level: "Beginner", duration: "12 min", Icon: IconBrush, color: "var(--level-beginner)" },
  { title: "Advanced Color Grading", category: "Color & Tone", level: "Advanced", duration: "25 min", Icon: IconColorWheel, color: "var(--level-advanced)" },
  { title: "Frequency Separation", category: "Retouching", level: "Pro", duration: "30 min", Icon: IconWand, color: "var(--level-pro)" },
];

const dailyTips = [
  { tool: "Move Tool", shortcut: "V", tip: "Hold Shift to constrain movement to 45 degree angles" },
  { tool: "Brush Tool", shortcut: "B", tip: "Use [ and ] to quickly resize your brush" },
  { tool: "Pen Tool", shortcut: "P", tip: "Click and drag to create smooth curves" },
];

function timeAgo(isoDate: string): string {
  const diff = Date.now() - new Date(isoDate).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
}

export default function Dashboard() {
  const { state } = useApp();

  const overallProgress = Math.round(
    state.pathProgress.reduce((sum, p) => sum + p.progress, 0) / state.pathProgress.length
  );

  // Show onboarding for new users
  if (!state.onboardingDone && state.user) {
    return <Onboarding />;
  }

  return (
    <div className="min-h-screen p-4 md:p-8 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 md:mb-10 opacity-0 animate-fade-in-up">
          <div className="flex items-start justify-between">
            <div className="ml-10 md:ml-0">
              <p className="text-sm font-semibold tracking-wide uppercase mb-2" style={{ color: "var(--accent-primary)", letterSpacing: "0.08em" }}>
                Welcome back
              </p>
              <h1 className="text-2xl md:text-4xl mb-2 font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                Photoshop Mastery
              </h1>
              <p className="text-sm md:text-base" style={{ color: "var(--text-secondary)" }}>
                Continue your creative journey — you&apos;re on a {state.dayStreak}-day streak.
              </p>
            </div>
            <ProgressRing progress={overallProgress} size={64} label="overall" />
          </div>
        </header>

        {/* Quick Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
          {[
            { label: "Lessons", value: state.lessonsCompleted, IconComp: IconBook },
            { label: "Hours", value: state.hoursPracticed, IconComp: IconClock },
            { label: "Skills", value: state.skillsUnlocked, IconComp: IconUnlock },
            { label: "Streak", value: state.dayStreak, IconComp: IconFire },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`card-hover opacity-0 animate-fade-in-up stagger-${i + 1} rounded-2xl p-4 md:p-5 border`}
              style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--accent-glow)", color: "var(--accent-primary)" }}>
                  <stat.IconComp size={14} />
                </div>
                <span className="text-xs font-medium" style={{ color: "var(--text-tertiary)" }}>{stat.label}</span>
              </div>
              <p className="text-2xl md:text-3xl font-semibold" style={{ color: "var(--text-primary)" }}>{stat.value}</p>
            </div>
          ))}
        </section>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Lessons — 2 columns on desktop */}
          <section className="lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg md:text-xl font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
                Featured Lessons
              </h2>
              <Link href="/learn" className="text-sm font-medium transition-colors hover:opacity-80" style={{ color: "var(--accent-primary)" }}>
                View all &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {featuredLessons.map((lesson, i) => (
                <Link href="/learn" key={lesson.title}
                  className={`card-hover opacity-0 animate-fade-in-up stagger-${i + 3} rounded-2xl border overflow-hidden group`}
                  style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="h-24 md:h-32 flex items-center justify-center relative overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${lesson.color}15, ${lesson.color}08)` }} />
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300" style={{ color: "var(--text-tertiary)" }}>
                      <lesson.Icon size={32} />
                    </div>
                  </div>
                  <div className="p-3 md:p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ color: lesson.color, background: `${lesson.color}15` }}>
                        {lesson.level}
                      </span>
                      <span className="text-[10px] md:text-xs" style={{ color: "var(--text-tertiary)" }}>{lesson.duration}</span>
                    </div>
                    <h3 className="font-semibold text-sm md:text-[15px] mb-0.5" style={{ color: "var(--text-primary)" }}>{lesson.title}</h3>
                    <p className="text-xs md:text-sm" style={{ color: "var(--text-tertiary)" }}>{lesson.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Right column */}
          <aside className="flex flex-col gap-6">
            {/* Continue Learning */}
            <div className="rounded-2xl border p-5 opacity-0 animate-fade-in-up stagger-5" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}>
              <h3 className="text-lg mb-4 font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>Continue Learning</h3>
              {state.lessonProgress.length === 0 ? (
                <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>Start a learning path to see your progress here.</p>
              ) : (
                <div className="flex flex-col gap-3">
                  {state.lessonProgress.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium group-hover:opacity-80 transition-opacity" style={{ color: "var(--text-primary)" }}>{item.title}</span>
                        <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>{timeAgo(item.lastAccessed)}</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-tertiary)" }}>
                        <div className="h-full rounded-full progress-bar" style={{ width: `${item.progress}%`, background: item.completed ? "var(--level-beginner)" : "var(--accent-primary)" }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Daily Tips */}
            <div className="rounded-2xl border p-5 opacity-0 animate-fade-in-up stagger-6" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}>
              <div className="flex items-center gap-2 mb-4">
                <div style={{ color: "var(--accent-primary)" }}><IconWand size={18} /></div>
                <h3 className="text-lg font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>Daily Tips</h3>
              </div>
              <div className="flex flex-col gap-3">
                {dailyTips.map((tip) => (
                  <div key={tip.tool} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "var(--bg-secondary)" }}>
                    <span className="kbd mt-0.5">{tip.shortcut}</span>
                    <div>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--text-primary)" }}>{tip.tool}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>{tip.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border p-5 opacity-0 animate-fade-in-up stagger-7" style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}>
              <h3 className="text-lg mb-4 font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>Quick Actions</h3>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Browse all shortcuts", href: "/shortcuts" },
                  { label: "Explore tools", href: "/tools" },
                  { label: "Take a challenge", href: "/challenges" },
                ].map((action) => (
                  <Link key={action.href} href={action.href}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:translate-x-1"
                    style={{ color: "var(--text-secondary)", background: "transparent" }}
                  >
                    <span className="text-sm font-medium">{action.label}</span>
                    <span className="ml-auto text-xs opacity-50">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
