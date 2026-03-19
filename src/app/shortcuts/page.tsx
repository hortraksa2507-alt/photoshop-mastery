"use client";

import { useState } from "react";

type ShortcutCategory = "all" | "general" | "layers" | "selection" | "tools" | "view" | "brush" | "type" | "transform";

const shortcutCategories: { key: ShortcutCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "general", label: "General" },
  { key: "layers", label: "Layers" },
  { key: "selection", label: "Selection" },
  { key: "tools", label: "Tools" },
  { key: "view", label: "View" },
  { key: "brush", label: "Brush" },
  { key: "transform", label: "Transform" },
];

interface Shortcut {
  action: string;
  mac: string;
  windows: string;
  category: ShortcutCategory;
  essential: boolean;
  tip?: string;
}

const shortcuts: Shortcut[] = [
  // General
  { action: "New Document", mac: "\u2318 N", windows: "Ctrl+N", category: "general", essential: true },
  { action: "Open File", mac: "\u2318 O", windows: "Ctrl+O", category: "general", essential: true },
  { action: "Save", mac: "\u2318 S", windows: "Ctrl+S", category: "general", essential: true },
  { action: "Save As", mac: "\u2318 \u21e7 S", windows: "Ctrl+Shift+S", category: "general", essential: true },
  { action: "Undo", mac: "\u2318 Z", windows: "Ctrl+Z", category: "general", essential: true, tip: "In CC 2019+, this gives multiple undos by default" },
  { action: "Redo", mac: "\u2318 \u21e7 Z", windows: "Ctrl+Shift+Z", category: "general", essential: true },
  { action: "Free Transform", mac: "\u2318 T", windows: "Ctrl+T", category: "general", essential: true, tip: "Hold Shift in older versions to constrain proportions" },
  { action: "Preferences", mac: "\u2318 K", windows: "Ctrl+K", category: "general", essential: false },
  { action: "Fill Dialog", mac: "\u21e7 F5", windows: "Shift+F5", category: "general", essential: false, tip: "Quick access to Content-Aware Fill" },
  { action: "Color Settings", mac: "\u2318 \u21e7 K", windows: "Ctrl+Shift+K", category: "general", essential: false },

  // Layers
  { action: "New Layer", mac: "\u2318 \u21e7 N", windows: "Ctrl+Shift+N", category: "layers", essential: true },
  { action: "Duplicate Layer", mac: "\u2318 J", windows: "Ctrl+J", category: "layers", essential: true, tip: "With selection active, copies only the selected area to a new layer" },
  { action: "Merge Down", mac: "\u2318 E", windows: "Ctrl+E", category: "layers", essential: true },
  { action: "Flatten Image", mac: "\u2318 \u21e7 E", windows: "Ctrl+Shift+E", category: "layers", essential: false },
  { action: "Group Layers", mac: "\u2318 G", windows: "Ctrl+G", category: "layers", essential: true },
  { action: "Ungroup Layers", mac: "\u2318 \u21e7 G", windows: "Ctrl+Shift+G", category: "layers", essential: false },
  { action: "Clipping Mask", mac: "\u2318 \u2325 G", windows: "Ctrl+Alt+G", category: "layers", essential: true, tip: "Or Alt/Option-click between layers in panel" },
  { action: "Merge Visible to New", mac: "\u2318 \u2325 \u21e7 E", windows: "Ctrl+Alt+Shift+E", category: "layers", essential: true, tip: "Creates a flattened copy — keeps originals intact" },
  { action: "Select Layer Above", mac: "\u2325 ]", windows: "Alt+]", category: "layers", essential: false },
  { action: "Select Layer Below", mac: "\u2325 [", windows: "Alt+[", category: "layers", essential: false },

  // Selection
  { action: "Select All", mac: "\u2318 A", windows: "Ctrl+A", category: "selection", essential: true },
  { action: "Deselect", mac: "\u2318 D", windows: "Ctrl+D", category: "selection", essential: true },
  { action: "Reselect", mac: "\u2318 \u21e7 D", windows: "Ctrl+Shift+D", category: "selection", essential: true, tip: "Brings back the last selection you dismissed" },
  { action: "Inverse Selection", mac: "\u2318 \u21e7 I", windows: "Ctrl+Shift+I", category: "selection", essential: true },
  { action: "Feather Selection", mac: "\u21e7 F6", windows: "Shift+F6", category: "selection", essential: false },
  { action: "Select Color Range", mac: "Select \u2192 Color Range", windows: "Select \u2192 Color Range", category: "selection", essential: false, tip: "Powerful selection by color — better than Magic Wand for complex selections" },
  { action: "Load Layer as Selection", mac: "\u2318 Click thumbnail", windows: "Ctrl+Click thumbnail", category: "selection", essential: true, tip: "Click the layer thumbnail in the Layers panel" },

  // Tools
  { action: "Move Tool", mac: "V", windows: "V", category: "tools", essential: true },
  { action: "Selection Tools", mac: "M", windows: "M", category: "tools", essential: true },
  { action: "Lasso Tools", mac: "L", windows: "L", category: "tools", essential: true },
  { action: "Quick Selection / Wand", mac: "W", windows: "W", category: "tools", essential: true },
  { action: "Crop Tool", mac: "C", windows: "C", category: "tools", essential: true },
  { action: "Brush / Pencil", mac: "B", windows: "B", category: "tools", essential: true },
  { action: "Clone Stamp", mac: "S", windows: "S", category: "tools", essential: true },
  { action: "Eraser", mac: "E", windows: "E", category: "tools", essential: false },
  { action: "Gradient / Paint Bucket", mac: "G", windows: "G", category: "tools", essential: false },
  { action: "Pen Tool", mac: "P", windows: "P", category: "tools", essential: true },
  { action: "Type Tool", mac: "T", windows: "T", category: "tools", essential: true },
  { action: "Eyedropper", mac: "I", windows: "I", category: "tools", essential: true },
  { action: "Healing Brush / Spot", mac: "J", windows: "J", category: "tools", essential: true },
  { action: "Hand Tool", mac: "H (or Space)", windows: "H (or Space)", category: "tools", essential: true, tip: "Space bar is faster — temporarily activates Hand from any tool" },
  { action: "Zoom Tool", mac: "Z", windows: "Z", category: "tools", essential: false },
  { action: "Swap FG/BG Colors", mac: "X", windows: "X", category: "tools", essential: true },
  { action: "Default Colors (B&W)", mac: "D", windows: "D", category: "tools", essential: true },

  // View
  { action: "Zoom In", mac: "\u2318 +", windows: "Ctrl++", category: "view", essential: true },
  { action: "Zoom Out", mac: "\u2318 -", windows: "Ctrl+-", category: "view", essential: true },
  { action: "Fit on Screen", mac: "\u2318 0", windows: "Ctrl+0", category: "view", essential: true },
  { action: "Actual Pixels (100%)", mac: "\u2318 1", windows: "Ctrl+1", category: "view", essential: true },
  { action: "Toggle Rulers", mac: "\u2318 R", windows: "Ctrl+R", category: "view", essential: false },
  { action: "Toggle Guides", mac: "\u2318 ;", windows: "Ctrl+;", category: "view", essential: false },
  { action: "Toggle Grid", mac: "\u2318 '", windows: "Ctrl+'", category: "view", essential: false },

  // Brush
  { action: "Increase Brush Size", mac: "]", windows: "]", category: "brush", essential: true },
  { action: "Decrease Brush Size", mac: "[", windows: "[", category: "brush", essential: true },
  { action: "Increase Hardness", mac: "\u21e7 ]", windows: "Shift+]", category: "brush", essential: true },
  { action: "Decrease Hardness", mac: "\u21e7 [", windows: "Shift+[", category: "brush", essential: true },
  { action: "Set Opacity 10\u2013100%", mac: "1\u20130 keys", windows: "1\u20130 keys", category: "brush", essential: true, tip: "Press 1 for 10%, 5 for 50%, 0 for 100%. Press two digits quickly for exact values." },
  { action: "HUD Color Picker", mac: "\u2303 \u2325 \u2318 Click", windows: "Shift+Alt+Right Click", category: "brush", essential: false, tip: "A floating color wheel — no need to open the Color Picker dialog" },

  // Transform
  { action: "Free Transform", mac: "\u2318 T", windows: "Ctrl+T", category: "transform", essential: true },
  { action: "Warp Mode", mac: "\u2318 T then \u2303 click", windows: "Ctrl+T then right-click", category: "transform", essential: false, tip: "Inside Free Transform, switch to Warp for organic deformations" },
  { action: "Scale from Center", mac: "\u2325 drag corner", windows: "Alt+drag corner", category: "transform", essential: true },
  { action: "Distort", mac: "\u2318 drag corner", windows: "Ctrl+drag corner", category: "transform", essential: false },
  { action: "Skew", mac: "\u2318 \u21e7 drag side", windows: "Ctrl+Shift+drag side", category: "transform", essential: false },
];

export default function ShortcutsPage() {
  const [activeCategory, setActiveCategory] = useState<ShortcutCategory>("all");
  const [showEssentialOnly, setShowEssentialOnly] = useState(false);
  const [platform, setPlatform] = useState<"mac" | "windows">("mac");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = shortcuts.filter((s) => {
    const matchesCategory = activeCategory === "all" || s.category === activeCategory;
    const matchesEssential = !showEssentialOnly || s.essential;
    const matchesSearch =
      searchQuery === "" ||
      s.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.mac.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.windows.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesEssential && matchesSearch;
  });

  return (
    <div className="min-h-screen p-4 md:p-8 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 opacity-0 animate-fade-in-up">
          <p
            className="text-xs md:text-sm font-semibold tracking-wide uppercase mb-2 ml-10 md:ml-0"
            style={{ color: "var(--accent-primary)", letterSpacing: "0.08em" }}
          >
            Keyboard Shortcuts
          </p>
          <h1
            className="text-2xl md:text-4xl mb-2 font-semibold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Speed Is a Superpower
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px" }}>
            Master these shortcuts to work 10x faster. Star icons mark the essential ones to learn first.
          </p>
        </header>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 opacity-0 animate-fade-in-up stagger-1">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search shortcuts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-xl text-sm outline-none transition-all focus:ring-2 w-full sm:w-64"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-primary)",
                }}
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-tertiary)"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
            </div>

            {/* Essential toggle */}
            <button
              onClick={() => setShowEssentialOnly(!showEssentialOnly)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium transition-all"
              style={{
                background: showEssentialOnly ? "var(--accent-primary)" : "var(--bg-secondary)",
                color: showEssentialOnly ? "#fff" : "var(--text-secondary)",
                border: "1px solid",
                borderColor: showEssentialOnly ? "var(--accent-primary)" : "var(--border-subtle)",
              }}
            >
              Essential Only
            </button>
          </div>

          {/* Platform toggle */}
          <div
            className="flex items-center rounded-xl p-1"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}
          >
            <button
              onClick={() => setPlatform("mac")}
              className="px-4 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={{
                background: platform === "mac" ? "var(--bg-card)" : "transparent",
                color: platform === "mac" ? "var(--text-primary)" : "var(--text-tertiary)",
                boxShadow: platform === "mac" ? "var(--shadow-sm)" : "none",
              }}
            >
              {"\u2318"} Mac
            </button>
            <button
              onClick={() => setPlatform("windows")}
              className="px-4 py-1.5 rounded-lg text-xs font-medium transition-all"
              style={{
                background: platform === "windows" ? "var(--bg-card)" : "transparent",
                color: platform === "windows" ? "var(--text-primary)" : "var(--text-tertiary)",
                boxShadow: platform === "windows" ? "var(--shadow-sm)" : "none",
              }}
            >
              {"\u229e"} Windows
            </button>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex items-center gap-1.5 mb-6 overflow-x-auto opacity-0 animate-fade-in-up stagger-2">
          {shortcutCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all"
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

        {/* Count */}
        <p className="text-xs mb-4 opacity-0 animate-fade-in stagger-3" style={{ color: "var(--text-tertiary)" }}>
          {filtered.length} shortcut{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Shortcuts Table */}
        <div
          className="rounded-2xl border overflow-hidden opacity-0 animate-fade-in-up stagger-3"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border-subtle)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          {/* Header */}
          <div
            className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-4 px-4 md:px-5 py-3 text-xs font-semibold uppercase tracking-wider"
            style={{ background: "var(--bg-secondary)", color: "var(--text-tertiary)" }}
          >
            <div className="md:col-span-5">Action</div>
            <div className="md:col-span-3">{platform === "mac" ? "Mac" : "Windows"}</div>
            <div className="hidden md:block md:col-span-4">Tip</div>
          </div>

          {/* Rows */}
          {filtered.map((shortcut, i) => (
            <div
              key={`${shortcut.action}-${shortcut.category}`}
              className="grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-4 px-4 md:px-5 py-3 items-center transition-colors hover:bg-[var(--bg-card-hover)]"
              style={{
                borderTop: i > 0 ? "1px solid var(--border-subtle)" : "none",
              }}
            >
              <div className="md:col-span-5 flex items-center gap-2">
                {shortcut.essential && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--accent-primary)" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                )}
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {shortcut.action}
                </span>
              </div>
              <div className="md:col-span-3">
                <span className="kbd">
                  {platform === "mac" ? shortcut.mac : shortcut.windows}
                </span>
              </div>
              <div className="hidden md:block md:col-span-4">
                {shortcut.tip && (
                  <span className="text-xs leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                    {shortcut.tip}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
