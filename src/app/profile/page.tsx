"use client";

import { useApp } from "@/context/AppContext";
import { IconTrophy, IconLightning, IconBook, IconClock, IconFire } from "@/components/PsIcons";

export default function ProfilePage() {
  const { state, resetProgress } = useApp();
  const user = state.user;

  const completedChallenges = state.challengeProgress.filter((c) => c.completed).length;
  const startedPaths = state.pathProgress.filter((p) => p.started).length;
  const completedPaths = state.pathProgress.filter((p) => p.progress === 100).length;

  // Level calculation
  const level = Math.floor(state.totalXP / 500) + 1;
  const xpInLevel = state.totalXP % 500;
  const xpForNext = 500;

  const levelTitles = [
    "Pixel Novice", "Selection Apprentice", "Layer Learner", "Brush Explorer",
    "Mask Master", "Compositing Pro", "Retouching Expert", "Color Wizard",
    "Automation Guru", "Photoshop Legend",
  ];
  const levelTitle = levelTitles[Math.min(level - 1, levelTitles.length - 1)];

  return (
    <div className="min-h-screen p-8 pb-16">
      <div className="max-w-3xl mx-auto">
        {/* Profile Header */}
        <div
          className="rounded-2xl border p-8 mb-8 opacity-0 animate-fade-in-up"
          style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
        >
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold overflow-hidden flex-shrink-0"
              style={{ background: "var(--accent-primary)", color: "#fff", boxShadow: "0 4px 12px rgba(217, 119, 87, 0.3)" }}
            >
              {user?.photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={user.photoUrl} alt="" className="w-full h-full object-cover" />
              ) : (
                user?.firstName?.charAt(0).toUpperCase() || "?"
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                {user?.firstName} {user?.lastName}
              </h1>
              {user?.username && (
                <p className="text-sm mb-2" style={{ color: "var(--text-tertiary)" }}>
                  @{user.username}
                </p>
              )}
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{ background: "var(--accent-glow)", color: "var(--accent-primary)" }}
                >
                  Level {level} — {levelTitle}
                </span>
                {user?.isPremium && (
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: "#B07CC620", color: "#B07CC6" }}>
                    Premium
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* XP Progress */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                XP to next level
              </span>
              <span className="text-xs font-bold" style={{ color: "var(--accent-primary)" }}>
                {xpInLevel} / {xpForNext}
              </span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-input)" }}>
              <div
                className="h-full rounded-full progress-bar"
                style={{ width: `${(xpInLevel / xpForNext) * 100}%`, background: "var(--accent-primary)" }}
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total XP", value: state.totalXP, Icon: IconLightning },
            { label: "Lessons Done", value: state.lessonsCompleted, Icon: IconBook },
            { label: "Hours Practiced", value: state.hoursPracticed.toFixed(1), Icon: IconClock },
            { label: "Day Streak", value: state.dayStreak, Icon: IconFire },
            { label: "Challenges Won", value: completedChallenges, Icon: IconTrophy },
            { label: "Paths Started", value: `${startedPaths} (${completedPaths} done)`, Icon: IconBook },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`rounded-2xl border p-5 opacity-0 animate-fade-in-up stagger-${i + 1}`}
              style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "var(--accent-glow)", color: "var(--accent-primary)" }}>
                  <stat.Icon size={14} />
                </div>
                <span className="text-xs font-medium" style={{ color: "var(--text-tertiary)" }}>{stat.label}</span>
              </div>
              <p className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Active Learning Paths */}
        <div
          className="rounded-2xl border p-6 mb-8 opacity-0 animate-fade-in-up stagger-7"
          style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
        >
          <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            My Learning Paths
          </h2>
          {state.pathProgress.filter((p) => p.started).length === 0 ? (
            <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
              You haven&apos;t started any learning paths yet. Head to Learning Paths to begin!
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {state.pathProgress.filter((p) => p.started).map((path) => (
                <div key={path.id} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                        Path {path.id}
                      </span>
                      <span className="text-xs font-bold" style={{ color: "var(--accent-primary)" }}>
                        {path.lessonsCompleted}/{path.totalLessons} lessons
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-input)" }}>
                      <div className="h-full rounded-full" style={{ width: `${path.progress}%`, background: "var(--accent-primary)" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Settings */}
        <div
          className="rounded-2xl border p-6 opacity-0 animate-fade-in-up stagger-8"
          style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
        >
          <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Settings
          </h2>
          <button
            onClick={() => {
              if (confirm("Reset all progress? This cannot be undone.")) {
                resetProgress();
              }
            }}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
            style={{ background: "#D9775720", color: "#D97757", border: "1px solid #D9775740" }}
          >
            Reset All Progress
          </button>
          <p className="text-xs mt-2" style={{ color: "var(--text-tertiary)" }}>
            This will clear all your lessons, challenges, and XP. Your profile will remain.
          </p>
        </div>
      </div>
    </div>
  );
}
