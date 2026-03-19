"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { IconMarquee, IconColorWheel, IconLayers, IconType, IconWand, IconBrush, IconRocket, IconLightning, IconTrophy } from "@/components/PsIcons";

type Difficulty = "all" | "easy" | "medium" | "hard" | "expert";

const difficulties: { key: Difficulty; label: string; color: string }[] = [
  { key: "all", label: "All", color: "var(--accent-primary)" },
  { key: "easy", label: "Easy", color: "var(--level-beginner)" },
  { key: "medium", label: "Medium", color: "var(--level-intermediate)" },
  { key: "hard", label: "Hard", color: "var(--level-advanced)" },
  { key: "expert", label: "Expert", color: "var(--level-pro)" },
];

const challenges = [
  {
    id: 1, title: "Perfect Cutout", description: "Remove a person from a complex background using Select & Mask. Achieve clean, natural-looking edges including hair detail.",
    difficulty: "easy" as Difficulty, category: "Selection", skills: ["Quick Selection", "Select & Mask", "Feathering"],
    estimatedTime: "15 min", xp: 100, Icon: IconMarquee,
    steps: ["Open the provided portrait image with messy hair against a busy background", "Use Quick Selection to make initial selection of the subject", "Enter Select & Mask workspace", "Use Refine Edge Brush on hair areas", "Adjust Global Refinements (Smooth, Feather, Contrast)", "Output to a New Layer with Layer Mask", "Place on a new solid-color background to verify edge quality"],
  },
  {
    id: 2, title: "Color Pop Effect", description: "Create a selective color effect where one object retains color while the rest becomes black and white.",
    difficulty: "easy" as Difficulty, category: "Color & Tone", skills: ["Hue/Saturation", "Layer Masks", "Brush Tool"],
    estimatedTime: "10 min", xp: 75, Icon: IconColorWheel,
    steps: ["Open an image with a colorful subject", "Add a Black & White adjustment layer", "Select the adjustment layer's mask", "Use a black brush to paint over the area you want to keep in color", "Refine edges for a clean look", "Optional: boost the colored area with a Vibrance adjustment"],
  },
  {
    id: 3, title: "Double Exposure Portrait", description: "Blend a portrait with a landscape or texture to create a trendy double exposure effect using blend modes.",
    difficulty: "medium" as Difficulty, category: "Compositing", skills: ["Blend Modes", "Layer Masks", "Levels", "Clipping Masks"],
    estimatedTime: "25 min", xp: 200, Icon: IconLayers,
    steps: ["Open a high-contrast portrait (silhouette works best)", "Select the subject and create a clean cutout", "Place the landscape/texture image above", "Clip the landscape to the portrait shape (Clipping Mask)", "Experiment with Screen or Lighten blend modes", "Add a Layer Mask to fade out edges", "Adjust Levels for contrast and drama", "Add a subtle color grade with Color Balance"],
  },
  {
    id: 4, title: "Realistic Text on Surface", description: "Place text onto a textured surface (brick wall, t-shirt, etc.) so it looks naturally part of the scene.",
    difficulty: "medium" as Difficulty, category: "Compositing", skills: ["Displacement Map", "Blend Modes", "Smart Objects"],
    estimatedTime: "20 min", xp: 175, Icon: IconType,
    steps: ["Open an image with a textured surface", "Create your text layer", "Convert text to Smart Object", "Prepare a displacement map (grayscale version of the surface)", "Apply Filter > Distort > Displace to the text", "Set text blend mode to Multiply or Overlay", "Reduce opacity slightly if needed", "Add subtle shadow/bevel for extra realism"],
  },
  {
    id: 5, title: "Frequency Separation Retouch", description: "Apply the industry-standard frequency separation technique to retouch skin while preserving natural texture.",
    difficulty: "hard" as Difficulty, category: "Retouching", skills: ["Gaussian Blur", "Apply Image", "Healing Brush", "Blend Modes"],
    estimatedTime: "35 min", xp: 350, Icon: IconWand,
    steps: ["Duplicate the background layer twice", "Name layers 'Low Frequency' and 'High Frequency'", "Apply Gaussian Blur to Low Frequency (radius 4-8px for portraits)", "Select High Frequency layer", "Apply Image: Source = Low Frequency, Blending = Subtract, Scale 2, Offset 128", "Set High Frequency to Linear Light blend mode", "Use Clone Stamp on High Frequency for texture fixes", "Use Mixer Brush on Low Frequency for tone smoothing", "Compare before/after — skin should look natural, not plastic"],
  },
  {
    id: 6, title: "Cinematic Color Grade", description: "Transform a regular photo into a cinematic masterpiece using professional color grading techniques.",
    difficulty: "hard" as Difficulty, category: "Color & Tone", skills: ["Curves", "Color Balance", "Selective Color", "LUTs"],
    estimatedTime: "30 min", xp: 300, Icon: IconBrush,
    steps: ["Open a landscape or street photo", "Add a Curves adjustment — lift blacks, compress highlights (matte look)", "Use Color Balance: add teal to shadows, orange to highlights", "Add Selective Color to fine-tune skin tones if people are present", "Apply a subtle vignette using a feathered selection + Curves", "Add film grain via Filter > Noise > Add Noise (1-3%)", "Crop to 2.39:1 aspect ratio for cinematic letterbox", "Optional: Add a subtle lens flare for atmosphere"],
  },
  {
    id: 7, title: "Surreal Miniature World", description: "Create a mind-bending composite where a miniature scene exists inside an everyday object using advanced masking.",
    difficulty: "expert" as Difficulty, category: "Compositing", skills: ["Advanced Masking", "Perspective Warp", "Lighting", "Color Matching"],
    estimatedTime: "60 min", xp: 500, Icon: IconRocket,
    steps: ["Choose a container object (lightbulb, jar, hat, etc.)", "Select and mask the opening/transparent area", "Source a landscape or scene that fits the theme", "Place the scene inside using perspective warp to match angles", "Match lighting direction using Dodge & Burn", "Color-match using Curves (eyedropper matching technique)", "Add depth with atmospheric haze (soft white brush, low opacity)", "Create realistic shadows at contact points", "Add small details: light spill, reflections, mist", "Final color grade to unify the composite"],
  },
  {
    id: 8, title: "Action-Automated Batch Workflow", description: "Build a complete automation workflow that processes 50+ images: resize, watermark, color correct, and export.",
    difficulty: "expert" as Difficulty, category: "Automation", skills: ["Actions", "Batch Processing", "Conditional Actions", "Droplets"],
    estimatedTime: "45 min", xp: 450, Icon: IconLightning,
    steps: ["Plan the workflow: what needs to happen to each image", "Record an Action: resize to max 2000px longest edge", "Add a watermark placement step (using Place Embedded)", "Add auto levels or auto color correction", "Add a Save for Web export step", "Test the action on a single image", "Set up Batch (File > Automate > Batch) with source/destination folders", "Add error handling (Log Errors to File)", "Create a Droplet for drag-and-drop convenience", "Process the full batch and verify results"],
  },
];

export default function ChallengesPage() {
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty>("all");
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null);
  const { state, completeChallenge } = useApp();

  const isChallengeCompleted = (id: number) =>
    state.challengeProgress.some((c) => c.id === id && c.completed);

  const filtered =
    activeDifficulty === "all"
      ? challenges
      : challenges.filter((c) => c.difficulty === activeDifficulty);

  const completedCount = challenges.filter((c) => isChallengeCompleted(c.id)).length;

  return (
    <div className="min-h-screen p-4 md:p-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 opacity-0 animate-fade-in-up">
          <p className="text-xs md:text-sm font-semibold tracking-wide uppercase mb-2 ml-10 md:ml-0" style={{ color: "var(--accent-primary)", letterSpacing: "0.08em" }}>
            Practice Challenges
          </p>
          <h1 className="text-2xl md:text-4xl mb-2 font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Learn by Doing
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
            Hands-on challenges with step-by-step guidance. Complete them to earn XP and track your growth.
          </p>
        </header>

        {/* Stats bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 md:p-5 rounded-2xl border mb-8 opacity-0 animate-fade-in-up stagger-1"
          style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-glow)", color: "var(--accent-primary)" }}>
              <IconTrophy size={20} />
            </div>
            <div>
              <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>Completed</p>
              <p className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                {completedCount}/{challenges.length}
              </p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8" style={{ background: "var(--border-subtle)" }} />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--accent-glow)", color: "var(--accent-primary)" }}>
              <IconLightning size={20} />
            </div>
            <div>
              <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>Total XP</p>
              <p className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                {state.totalXP}
              </p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8" style={{ background: "var(--border-subtle)" }} />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>Overall Progress</span>
              <span className="text-xs font-bold" style={{ color: "var(--accent-primary)" }}>
                {Math.round((completedCount / challenges.length) * 100)}%
              </span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-tertiary)" }}>
              <div className="h-full rounded-full progress-bar" style={{ width: `${(completedCount / challenges.length) * 100}%`, background: "var(--accent-primary)" }} />
            </div>
          </div>
        </div>

        {/* Difficulty filters */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 opacity-0 animate-fade-in-up stagger-2">
          {difficulties.map((diff) => (
            <button
              key={diff.key}
              onClick={() => setActiveDifficulty(diff.key)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={{
                background: activeDifficulty === diff.key ? diff.color : "var(--bg-secondary)",
                color: activeDifficulty === diff.key ? "#fff" : "var(--text-secondary)",
                border: "1px solid",
                borderColor: activeDifficulty === diff.key ? diff.color : "var(--border-subtle)",
              }}
            >
              {diff.label}
            </button>
          ))}
        </div>

        {/* Challenges */}
        <div className="grid grid-cols-1 gap-4">
          {filtered.map((challenge, i) => {
            const diffInfo = difficulties.find((d) => d.key === challenge.difficulty)!;
            const isExpanded = expandedChallenge === challenge.id;
            const completed = isChallengeCompleted(challenge.id);

            return (
              <div
                key={challenge.id}
                className={`opacity-0 animate-fade-in-up stagger-${(i % 6) + 2} rounded-2xl border overflow-hidden transition-all duration-300`}
                style={{
                  background: isExpanded ? "var(--bg-card-hover)" : "var(--bg-card)",
                  borderColor: isExpanded ? "var(--border-accent)" : completed ? "var(--level-beginner)" : "var(--border-subtle)",
                  boxShadow: isExpanded ? "var(--shadow-md)" : "var(--shadow-sm)",
                }}
              >
                <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 cursor-pointer" onClick={() => setExpandedChallenge(isExpanded ? null : challenge.id)}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: completed ? `var(--level-beginner)15` : "var(--bg-secondary)",
                      color: completed ? "var(--level-beginner)" : "var(--text-tertiary)",
                    }}
                  >
                    {completed ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                    ) : (
                      <challenge.Icon size={24} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className="font-semibold"
                        style={{ color: "var(--text-primary)", textDecoration: completed ? "line-through" : "none", opacity: completed ? 0.6 : 1 }}
                      >
                        {challenge.title}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ color: diffInfo.color, background: `${diffInfo.color}15` }}>
                        {diffInfo.label}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: "var(--bg-secondary)", color: "var(--text-tertiary)" }}>
                        {challenge.category}
                      </span>
                    </div>
                    <p className="text-sm truncate" style={{ color: "var(--text-tertiary)" }}>
                      {challenge.description}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>{challenge.estimatedTime}</p>
                      <p className="text-xs font-bold" style={{ color: completed ? "var(--level-beginner)" : "var(--accent-primary)" }}>
                        {completed ? "Earned" : "+"}{challenge.xp} XP
                      </p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round"
                      className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-5 pb-5 animate-fade-in" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="pt-5 pl-0 md:pl-16">
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                        {challenge.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {challenge.skills.map((skill) => (
                          <span key={skill} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "var(--bg-secondary)", color: "var(--text-secondary)" }}>
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mb-5">
                        <h4 className="text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                          Step-by-Step Guide
                        </h4>
                        <ol className="flex flex-col gap-2.5">
                          {challenge.steps.map((step, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span
                                className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5"
                                style={{ background: "var(--bg-secondary)", color: "var(--text-secondary)" }}
                              >
                                {j + 1}
                              </span>
                              <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                                {step}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {!completed ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            completeChallenge(challenge.id, challenge.xp);
                          }}
                          className="px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90 active:scale-[0.97]"
                          style={{ background: "var(--accent-primary)", color: "#fff" }}
                        >
                          Mark as Complete — Earn {challenge.xp} XP
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl" style={{ background: `var(--level-beginner)15`, color: "var(--level-beginner)" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                          <span className="text-sm font-bold">Challenge Completed — {challenge.xp} XP Earned</span>
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
