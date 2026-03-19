"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { pathsData } from "./data";
import type { Lesson } from "./data";

export default function PathDetailPage() {
  const params = useParams();
  const pathId = params.pathId as string;
  const path = pathsData[pathId];
  const { state, startPath, updatePathProgress, updateLessonProgress, addXP } = useApp();
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  if (!path) {
    return (
      <div className="min-h-screen p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>Path not found</h1>
          <Link href="/learn" className="text-sm font-medium" style={{ color: "var(--accent-primary)" }}>&larr; Back to Learning Paths</Link>
        </div>
      </div>
    );
  }

  const pathProgress = state.pathProgress.find((p) => p.id === path.id);
  const isStarted = pathProgress?.started ?? false;

  const isLessonComplete = (lessonId: string) =>
    state.lessonProgress.some((l) => l.id === lessonId && l.completed);

  const completedCount = path.lessons.filter((l) => isLessonComplete(l.id)).length;
  const progressPercent = Math.round((completedCount / path.lessons.length) * 100);

  const handleStartPath = () => {
    startPath(path.id);
  };

  const handleCompleteLesson = (lesson: Lesson) => {
    if (isLessonComplete(lesson.id)) return;
    updateLessonProgress({
      id: lesson.id,
      title: lesson.title,
      progress: 100,
      lastAccessed: new Date().toISOString(),
      completed: true,
    });
    addXP(25);

    const newCompleted = completedCount + 1;
    const newProgress = Math.round((newCompleted / path.lessons.length) * 100);
    updatePathProgress(path.id, newProgress);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link href="/learn" className="inline-flex items-center gap-1 text-sm font-medium mb-6 ml-10 md:ml-0 transition-opacity hover:opacity-70" style={{ color: "var(--accent-primary)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
          Back to Learning Paths
        </Link>

        {/* Header */}
        <header className="mb-8 opacity-0 animate-fade-in-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ color: path.levelColor, background: `${path.levelColor}20` }}>
              {path.level}
            </span>
            <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>{path.lessons.length} lessons</span>
          </div>
          <h1 className="text-2xl md:text-3xl mb-2 font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
            {path.title}
          </h1>
          <p className="text-base" style={{ color: "var(--text-secondary)" }}>{path.description}</p>

          {/* Progress */}
          {isStarted && (
            <div className="mt-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                  {completedCount} of {path.lessons.length} lessons completed
                </span>
                <span className="text-xs font-bold" style={{ color: "var(--accent-primary)" }}>{progressPercent}%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-input)" }}>
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progressPercent}%`, background: "var(--accent-primary)" }} />
              </div>
            </div>
          )}

          {!isStarted && (
            <button
              onClick={handleStartPath}
              className="mt-5 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90 active:scale-[0.98]"
              style={{ background: "var(--accent-primary)", color: "#fff" }}
            >
              Start This Path
            </button>
          )}
        </header>

        {/* Lessons List */}
        <div className="flex flex-col gap-2">
          {path.lessons.map((lesson, i) => {
            const completed = isLessonComplete(lesson.id);
            const isActive = activeLesson === lesson.id;

            return (
              <div
                key={lesson.id}
                className={`opacity-0 animate-fade-in-up stagger-${(i % 8) + 1} rounded-xl border transition-all duration-200`}
                style={{
                  background: isActive ? "var(--bg-card-hover)" : "var(--bg-card)",
                  borderColor: isActive ? "var(--border-accent)" : completed ? "var(--level-beginner)40" : "var(--border-subtle)",
                }}
              >
                {/* Lesson header row */}
                <div
                  className="flex items-center gap-4 p-4 cursor-pointer"
                  onClick={() => setActiveLesson(isActive ? null : lesson.id)}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      background: completed ? "var(--level-beginner)" : "var(--bg-input)",
                      color: completed ? "#fff" : "var(--text-tertiary)",
                    }}
                  >
                    {completed ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                    ) : (
                      i + 1
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold" style={{ color: completed ? "var(--text-tertiary)" : "var(--text-primary)", textDecoration: completed ? "line-through" : "none" }}>
                      {lesson.title}
                    </h3>
                    <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>{lesson.duration}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    {completed && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "var(--level-beginner)20", color: "var(--level-beginner)" }}>
                        +25 XP
                      </span>
                    )}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round"
                      className={`transition-transform ${isActive ? "rotate-180" : ""}`}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>

                {/* Expanded lesson content */}
                {isActive && (
                  <div className="px-4 pb-5 animate-fade-in" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="pt-5 pl-0 md:pl-12">
                      {/* Lesson description */}
                      <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                        {lesson.description}
                      </p>

                      {/* Detailed content sections */}
                      {lesson.content && lesson.content.length > 0 && (
                        <div className="flex flex-col gap-5 mb-6">
                          {lesson.content.map((section, j) => (
                            <div key={j}>
                              <h4
                                className="text-sm font-bold mb-2 flex items-center gap-2"
                                style={{ color: "var(--text-primary)" }}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ background: path.levelColor }}
                                />
                                {section.heading}
                              </h4>
                              <div
                                className="text-sm leading-[1.75] whitespace-pre-line"
                                style={{ color: "var(--text-secondary)" }}
                              >
                                {section.body}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Key takeaways */}
                      <div
                        className="rounded-lg p-4 mb-5"
                        style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}
                      >
                        <h4 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: "var(--accent-primary)" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                          </svg>
                          Key Takeaways
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {lesson.keyTakeaways.map((point, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" className="flex-shrink-0 mt-1">
                                <path d="M20 6L9 17l-5-5" stroke="var(--accent-primary)" strokeWidth="3" fill="none" strokeLinecap="round" />
                              </svg>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action buttons */}
                      {isStarted && !completed && (
                        <button
                          onClick={(e) => { e.stopPropagation(); handleCompleteLesson(lesson); }}
                          className="px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:opacity-90 active:scale-[0.97]"
                          style={{ background: "var(--accent-primary)", color: "#fff" }}
                        >
                          Mark as Complete — +25 XP
                        </button>
                      )}
                      {completed && (
                        <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--level-beginner)" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                          Completed
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
