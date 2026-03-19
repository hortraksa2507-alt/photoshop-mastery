"use client";

import { useState } from "react";
import { toolIconMap } from "@/components/PsIcons";

type Category = "all" | "selection" | "painting" | "retouching" | "transform" | "type" | "navigation";

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Tools" },
  { key: "selection", label: "Selection" },
  { key: "painting", label: "Painting" },
  { key: "retouching", label: "Retouching" },
  { key: "transform", label: "Transform" },
  { key: "type", label: "Type & Shapes" },
  { key: "navigation", label: "Navigation" },
];

const tools = [
  { name: "Move Tool", shortcut: "V", category: "navigation" as Category, description: "Move layers and selections around the canvas. Hold Shift to constrain to 45 degree angles.", proTip: "Enable Auto-Select in the Options bar to click-select layers directly on canvas without using the Layers panel.", level: "beginner" },
  { name: "Rectangular Marquee", shortcut: "M", category: "selection" as Category, description: "Create rectangular selections. Hold Shift for perfect squares, Alt/Option to draw from center.", proTip: "Set a fixed ratio in Options bar (e.g., 16:9) for consistent crop-ready selections.", level: "beginner" },
  { name: "Lasso Tool", shortcut: "L", category: "selection" as Category, description: "Freehand selections by drawing. The Polygonal Lasso creates straight-edged selections.", proTip: "Hold Alt/Option while using the standard Lasso to temporarily switch to Polygonal mode.", level: "beginner" },
  { name: "Quick Selection", shortcut: "W", category: "selection" as Category, description: "Paints selections based on color and texture similarity. AI-powered edge detection.", proTip: "After selecting, click 'Select and Mask' for professional edge refinement — essential for hair/fur.", level: "intermediate" },
  { name: "Crop Tool", shortcut: "C", category: "transform" as Category, description: "Crop and straighten images. Set specific ratios or dimensions in the Options bar.", proTip: "Enable 'Content-Aware' in Options to intelligently fill gaps when straightening rotated images.", level: "beginner" },
  { name: "Eyedropper", shortcut: "I", category: "painting" as Category, description: "Sample colors from anywhere on screen. Changes your foreground color to the sampled pixel.", proTip: "Set sample size to 3x3 or 5x5 Average to avoid sampling a single noisy pixel.", level: "beginner" },
  { name: "Spot Healing Brush", shortcut: "J", category: "retouching" as Category, description: "Automatically removes blemishes and imperfections by analyzing surrounding texture.", proTip: "Use Content-Aware mode and paint on a new empty layer with 'Sample All Layers' checked for non-destructive work.", level: "beginner" },
  { name: "Clone Stamp", shortcut: "S", category: "retouching" as Category, description: "Paints with pixels sampled from another area. Alt/Option-click to set the source point.", proTip: "Use a separate layer and reduce opacity to 30-50% for gradual, natural-looking cloning.", level: "intermediate" },
  { name: "Brush Tool", shortcut: "B", category: "painting" as Category, description: "The most versatile painting tool. Supports pressure sensitivity, custom tips, and blend modes.", proTip: "Press [ ] to resize, Shift+[ ] for hardness. Hold Alt/Option to temporarily switch to Eyedropper.", level: "beginner" },
  { name: "Eraser Tool", shortcut: "E", category: "painting" as Category, description: "Erases pixels to transparency (or background color on locked layers).", proTip: "Almost never use the Eraser — use Layer Masks instead for non-destructive editing. This is a fundamental pro workflow.", level: "beginner" },
  { name: "Gradient Tool", shortcut: "G", category: "painting" as Category, description: "Creates smooth color transitions. Multiple types: linear, radial, angle, reflected, diamond.", proTip: "Apply gradients to Layer Masks for smooth, natural blending between composited images.", level: "intermediate" },
  { name: "Pen Tool", shortcut: "P", category: "selection" as Category, description: "Creates precise vector paths and selections. The most accurate selection tool in Photoshop.", proTip: "Master the Pen Tool to separate yourself from amateurs. Practice clicking for corners, dragging for curves.", level: "advanced" },
  { name: "Type Tool", shortcut: "T", category: "type" as Category, description: "Add point text or paragraph text. Full typography controls including tracking, leading, and kerning.", proTip: "Convert to Shape (Type > Convert to Shape) for complete vector control over letterforms.", level: "beginner" },
  { name: "Shape Tools", shortcut: "U", category: "type" as Category, description: "Vector rectangle, ellipse, polygon, line, and custom shape tools with fill and stroke options.", proTip: "Hold Shift for proportional shapes. Use Path Operations to combine shapes like Boolean operations.", level: "beginner" },
  { name: "Hand Tool", shortcut: "H", category: "navigation" as Category, description: "Pan around the canvas without changing your current tool or selection.", proTip: "Hold Space to temporarily activate Hand Tool from any tool — the most used shortcut in Photoshop.", level: "beginner" },
  { name: "Zoom Tool", shortcut: "Z", category: "navigation" as Category, description: "Zoom in and out. Ctrl/Cmd+0 to fit screen, Ctrl/Cmd+1 for 100% actual pixels.", proTip: "Enable 'Scrubby Zoom' and click-drag left/right for fluid zoom control.", level: "beginner" },
  { name: "Dodge / Burn", shortcut: "O", category: "retouching" as Category, description: "Dodge lightens, Burn darkens. Essential for adding dimension and directing the viewer's eye.", proTip: "Use a 50% gray layer set to Overlay blend mode for non-destructive dodge and burn on portraits.", level: "advanced" },
  { name: "Healing Brush", shortcut: "J", category: "retouching" as Category, description: "Like Clone Stamp but blends texture with surrounding color and luminosity for seamless repairs.", proTip: "Perfect for skin retouching — it preserves the underlying skin tone while replacing texture.", level: "intermediate" },
];

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTool, setExpandedTool] = useState<string | null>(null);

  const filtered = tools.filter((tool) => {
    const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.shortcut.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const levelColor = (level: string) => {
    switch (level) {
      case "beginner": return "var(--level-beginner)";
      case "intermediate": return "var(--level-intermediate)";
      case "advanced": return "var(--level-advanced)";
      default: return "var(--text-tertiary)";
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 opacity-0 animate-fade-in-up">
          <p className="ml-10 md:ml-0 text-sm font-semibold tracking-wide uppercase mb-2" style={{ color: "var(--accent-primary)", letterSpacing: "0.08em" }}>
            Tools Encyclopedia
          </p>
          <h1 className="text-2xl md:text-4xl mb-2 font-semibold tracking-tight" style={{ color: "var(--text-primary)" }}>
            Every Tool, Explained
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
            Your complete reference for every tool in the Photoshop toolbar — with pro tips included.
          </p>
        </header>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-8 opacity-0 animate-fade-in-up stagger-1">
          <div className="relative flex-1 max-w-full md:max-w-sm">
            <input
              type="text"
              placeholder="Search tools or shortcuts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all focus:ring-2"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)", color: "var(--text-primary)", "--tw-ring-color": "var(--accent-primary)" } as React.CSSProperties}
            />
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.3-4.3" />
            </svg>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200"
                style={{
                  background: activeCategory === cat.key ? "var(--accent-primary)" : "var(--bg-secondary)",
                  color: activeCategory === cat.key ? "#fff" : "var(--text-secondary)",
                  border: "1px solid",
                  borderColor: activeCategory === cat.key ? "var(--accent-primary)" : "var(--border-subtle)",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs mb-5 opacity-0 animate-fade-in stagger-2" style={{ color: "var(--text-tertiary)" }}>
          Showing {filtered.length} tool{filtered.length !== 1 ? "s" : ""}
        </p>

        <div className="grid grid-cols-1 gap-3">
          {filtered.map((tool, i) => {
            const ToolIcon = toolIconMap[tool.name];
            return (
              <div
                key={tool.name}
                className={`opacity-0 animate-fade-in-up stagger-${(i % 8) + 1} rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer`}
                style={{
                  background: expandedTool === tool.name ? "var(--bg-card-hover)" : "var(--bg-card)",
                  borderColor: expandedTool === tool.name ? "var(--border-accent)" : "var(--border-subtle)",
                  boxShadow: expandedTool === tool.name ? "var(--shadow-md)" : "var(--shadow-sm)",
                }}
                onClick={() => setExpandedTool(expandedTool === tool.name ? null : tool.name)}
              >
                <div className="flex items-center gap-4 p-4">
                  <div className="tool-icon" style={{ color: "var(--text-secondary)" }}>
                    {ToolIcon ? <ToolIcon size={20} /> : <span className="text-base">&#128295;</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-[15px]" style={{ color: "var(--text-primary)" }}>
                        {tool.name}
                      </h3>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ color: levelColor(tool.level), background: `${levelColor(tool.level)}15` }}
                      >
                        {tool.level}
                      </span>
                    </div>
                    <p className="text-sm truncate" style={{ color: "var(--text-tertiary)" }}>
                      {tool.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="kbd">{tool.shortcut}</span>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round"
                      className={`transition-transform duration-200 ${expandedTool === tool.name ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>

                {expandedTool === tool.name && (
                  <div className="px-4 pb-4 animate-fade-in" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="pt-4 pl-14">
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                        {tool.description}
                      </p>
                      <div className="claude-highlight flex items-start gap-3">
                        <div style={{ color: "var(--accent-primary)", marginTop: "2px" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--accent-primary)" }}>
                            Pro Tip
                          </p>
                          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                            {tool.proTip}
                          </p>
                        </div>
                      </div>
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
