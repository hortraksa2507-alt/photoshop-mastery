"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { IconLayers, IconBrush, IconColorWheel, IconWand, IconLightning, IconRocket, IconPen, IconMarquee } from "@/components/PsIcons";

type Level = "all" | "beginner" | "intermediate" | "advanced" | "pro";

const levels: { key: Level; label: string; color: string }[] = [
  { key: "all", label: "All Levels", color: "var(--accent-primary)" },
  { key: "beginner", label: "Beginner", color: "var(--level-beginner)" },
  { key: "intermediate", label: "Intermediate", color: "var(--level-intermediate)" },
  { key: "advanced", label: "Advanced", color: "var(--level-advanced)" },
  { key: "pro", label: "Pro", color: "var(--level-pro)" },
];

const learningPaths = [
  {
    id: 1,
    title: "Photoshop Foundations",
    description: "Master the interface, workspace, and essential tools from scratch. Perfect for complete beginners.",
    level: "beginner" as Level,
    totalLessons: 16,
    duration: "4.5 hours",
    Icon: IconBrush,
    topics: ["Interface Tour", "Layers Basics", "Selection Tools", "Basic Retouching", "File Formats", "Color Modes"],
  },
  {
    id: 2,
    title: "Selection & Masking Mastery",
    description: "Learn every selection technique from basic marquee to complex hair masking with Select & Mask.",
    level: "beginner" as Level,
    totalLessons: 12,
    duration: "3 hours",
    Icon: IconMarquee,
    topics: ["Marquee & Lasso", "Quick Selection", "Magic Wand", "Select & Mask", "Channels as Masks", "Refine Edge"],
  },
  {
    id: 3,
    title: "Layer Techniques & Compositing",
    description: "Deep dive into layers, blend modes, smart objects, and professional compositing workflows.",
    level: "intermediate" as Level,
    totalLessons: 20,
    duration: "6 hours",
    Icon: IconLayers,
    topics: ["Blend Modes", "Layer Masks", "Clipping Masks", "Smart Objects", "Adjustment Layers", "Compositing"],
  },
  {
    id: 4,
    title: "Color & Tone Correction",
    description: "Professional color grading, correction, and tone manipulation for photographs.",
    level: "intermediate" as Level,
    totalLessons: 14,
    duration: "4 hours",
    Icon: IconColorWheel,
    topics: ["Levels & Curves", "Hue/Saturation", "Color Balance", "Camera Raw", "LUTs", "Split Toning"],
  },
  {
    id: 5,
    title: "Professional Retouching",
    description: "Industry-standard retouching techniques used by fashion and portrait photographers.",
    level: "advanced" as Level,
    totalLessons: 18,
    duration: "5.5 hours",
    Icon: IconWand,
    topics: ["Frequency Separation", "Dodge & Burn", "Skin Retouching", "Liquify", "Eye Enhancement", "Hair Editing"],
  },
  {
    id: 6,
    title: "Digital Painting & Illustration",
    description: "Transform Photoshop into a powerful painting tool with custom brushes and techniques.",
    level: "advanced" as Level,
    totalLessons: 22,
    duration: "7 hours",
    Icon: IconPen,
    topics: ["Custom Brushes", "Painting Techniques", "Texture Painting", "Matte Painting", "Concept Art", "Digital Inking"],
  },
  {
    id: 7,
    title: "Automation & Efficiency",
    description: "Actions, scripts, batch processing, and workflow optimization for production environments.",
    level: "pro" as Level,
    totalLessons: 10,
    duration: "3 hours",
    Icon: IconLightning,
    topics: ["Actions Recording", "Batch Processing", "Droplets", "Scripts", "Variables", "Conditional Actions"],
  },
  {
    id: 8,
    title: "3D, Video & Generative AI",
    description: "Cutting-edge features including Generative Fill, 3D compositing, and video editing in Photoshop.",
    level: "pro" as Level,
    totalLessons: 15,
    duration: "4.5 hours",
    Icon: IconRocket,
    topics: ["Generative Fill", "Generative Expand", "3D Layers", "Video Timeline", "Neural Filters", "Sky Replacement"],
  },
];

export default function LearnPage() {
  const [activeLevel, setActiveLevel] = useState<Level>("all");
  const router = useRouter();
  const { state, startPath } = useApp();

  const filtered =
    activeLevel === "all"
      ? learningPaths
      : learningPaths.filter((p) => p.level === activeLevel);

  const getPathProgress = (pathId: number) =>
    state.pathProgress.find((p) => p.id === pathId);

  return (
    <div className="min-h-screen p-8 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 opacity-0 animate-fade-in-up">
          <p
            className="text-sm font-semibold tracking-wide uppercase mb-2"
            style={{ color: "var(--accent-primary)", letterSpacing: "0.08em" }}
          >
            Learning Paths
          </p>
          <h1
            className="text-4xl mb-2 font-semibold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            From First Pixel to Pro
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
            Structured courses designed to take you from any level to mastery. Each path builds on the last.
          </p>
        </header>

        {/* Level Filters */}
        <div className="flex items-center gap-2 mb-8 opacity-0 animate-fade-in-up stagger-1">
          {levels.map((level) => (
            <button
              key={level.key}
              onClick={() => setActiveLevel(level.key)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: activeLevel === level.key ? level.color : "var(--bg-secondary)",
                color: activeLevel === level.key ? "#fff" : "var(--text-secondary)",
                border: "1px solid",
                borderColor: activeLevel === level.key ? level.color : "var(--border-subtle)",
              }}
            >
              {level.label}
            </button>
          ))}
        </div>

        {/* Path Grid */}
        <div className="grid grid-cols-2 gap-5">
          {filtered.map((path, i) => {
            const levelInfo = levels.find((l) => l.key === path.level)!;
            const progress = getPathProgress(path.id);

            return (
              <div
                key={path.id}
                className={`card-hover opacity-0 animate-fade-in-up stagger-${(i % 6) + 2} rounded-2xl border overflow-hidden cursor-pointer group`}
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--border-subtle)",
                  boxShadow: "var(--shadow-sm)",
                }}
                onClick={() => router.push(`/learn/${path.id}`)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: "var(--bg-secondary)", color: "var(--text-tertiary)" }}
                    >
                      <path.Icon size={24} />
                    </div>
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ color: levelInfo.color, background: `${levelInfo.color}15` }}
                    >
                      {levelInfo.label}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    {path.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-tertiary)" }}>
                    {path.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {path.topics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "var(--bg-secondary)", color: "var(--text-secondary)" }}
                      >
                        {topic}
                      </span>
                    ))}
                    {path.topics.length > 4 && (
                      <span
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "var(--bg-secondary)", color: "var(--text-tertiary)" }}
                      >
                        +{path.topics.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                        {progress?.lessonsCompleted ?? 0}/{path.totalLessons} lessons
                      </span>
                      <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                        {path.duration}
                      </span>
                    </div>
                  </div>

                  {progress && progress.progress > 0 ? (
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                          Progress
                        </span>
                        <span className="text-xs font-bold" style={{ color: levelInfo.color }}>
                          {progress.progress}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-tertiary)" }}>
                        <div
                          className="h-full rounded-full progress-bar"
                          style={{ width: `${progress.progress}%`, background: levelInfo.color }}
                        />
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!progress?.started) startPath(path.id);
                        router.push(`/learn/${path.id}`);
                      }}
                      className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 active:scale-[0.98]"
                      style={{
                        background: progress?.started ? "var(--bg-secondary)" : levelInfo.color,
                        color: progress?.started ? "var(--accent-primary)" : "#fff",
                        border: progress?.started ? "1px solid var(--border-subtle)" : "none",
                      }}
                    >
                      {progress?.started ? "Continue →" : "Start Learning →"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
