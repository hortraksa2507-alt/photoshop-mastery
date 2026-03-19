// Official-style Photoshop tool SVG icons
// Based on Adobe Photoshop CC toolbar icon designs

import React from "react";

interface IconProps {
  size?: number;
  className?: string;
}

export function IconMove({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2l3 3h-2v4h4v-2l3 3-3 3v-2h-4v4h2l-3 3-3-3h2v-4H7v2l-3-3 3-3v2h4V5H9l3-3z" fill="currentColor"/>
    </svg>
  );
}

export function IconMarquee({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 2"/>
    </svg>
  );
}

export function IconLasso({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 4C7.58 4 4 7.58 4 12c0 2.75 1.4 5.18 3.52 6.62" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M7.52 18.62C8.82 19.5 10.35 20 12 20c4.42 0 8-3.58 8-8S16.42 4 12 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 2"/>
      <circle cx="7" cy="19" r="2" fill="currentColor"/>
    </svg>
  );
}

export function IconQuickSelect({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 2"/>
      <path d="M17.5 3.5l-4 8 3.5.5 4-8-3.5-.5z" fill="currentColor"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
    </svg>
  );
}

export function IconCrop({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 2v4H2v2h4v10h10v4h2v-4h4v-2H8V6h10v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconEyedropper({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M20.35 5.65a2 2 0 010 2.83l-1.42 1.41-4.24-4.24 1.41-1.42a2 2 0 012.83 0l1.42 1.42z" fill="currentColor" opacity="0.3"/>
      <path d="M14.69 5.65L5.1 15.24a1 1 0 00-.26.45l-1.28 4.48a.5.5 0 00.61.61l4.48-1.28a1 1 0 00.45-.26l9.59-9.59" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function IconSpotHeal({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 4a8 8 0 100 16 8 8 0 000-16z" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function IconCloneStamp({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M12 12v5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M8 21h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M10 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function IconBrush({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18.37 2.63a2 2 0 00-2.83 0L9 9.17l.59.58 2.83 2.83.58.59 6.54-6.54a2 2 0 000-2.83l-1.17-1.17z" fill="currentColor" opacity="0.2"/>
      <path d="M9 9.17L4.59 13.59A2 2 0 004 15v2a2 2 0 01-.59 1.41L2 19.83 4.17 22l1.42-1.41A2 2 0 017 20h2a2 2 0 001.41-.59L14.83 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M18.37 2.63a2 2 0 00-2.83 0L9 9.17l5.83 5.83 6.54-6.54a2 2 0 000-2.83l-1.17-1.17-.83-.83z" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  );
}

export function IconEraser({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M16.24 3.56l4.95 4.94a1.5 1.5 0 010 2.12l-8.48 8.49a3 3 0 01-2.12.88H7.17a3 3 0 01-2.12-.88l-1.5-1.5a1.5 1.5 0 010-2.12L14.12 4.92" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 16l-4.45-4.44" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M19 20H11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function IconGradient({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <rect x="3" y="3" width="6" height="18" fill="currentColor" opacity="0.6"/>
      <rect x="9" y="3" width="4" height="18" fill="currentColor" opacity="0.3"/>
      <rect x="13" y="3" width="3" height="18" fill="currentColor" opacity="0.15"/>
    </svg>
  );
}

export function IconPen({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 19l-7-7 9-9 7 7-9 9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M5 12l-2 9 9-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="5" r="1.5" fill="currentColor"/>
    </svg>
  );
}

export function IconType({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 7V4h16v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconShape({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.1"/>
    </svg>
  );
}

export function IconHand({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M18 11V6a1 1 0 10-2 0v4M14 10V4.5a1 1 0 10-2 0V10M10 10V5.5a1 1 0 10-2 0v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M18 11a3 3 0 012 2.83V16a6 6 0 01-6 6h-2a6 6 0 01-4.24-1.76l-3.53-3.53a1.5 1.5 0 012.12-2.12L8 16V5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconZoom({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M15 15l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconDodgeBurn({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M12 7V2M12 22v-5M17 12h5M2 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15.54 8.46l2.83-2.83M5.63 18.37l2.83-2.83M15.54 15.54l2.83 2.83M5.63 5.63l2.83 2.83" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconHealingBrush({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M17 3l4 4-14 14H3v-4L17 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M15 5l4 4" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M10 12v-2h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

// Category/Section icons
export function IconLayers({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconColorWheel({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconWand({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 21l10-10M15 3l-2 6 6-2-4-4z" fill="currentColor" opacity="0.2"/>
      <path d="M3 21l10-10m2-8l-2 6 6-2-4-4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 12l1 2M12 6l2 1M18 6l.5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconStar({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconLightning({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconRocket({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11.95A22 22 0 0112 15z" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function IconTrophy({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 9a6 6 0 1012 0V3H6v6z" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M6 5H3v2a3 3 0 003 3M18 5h3v2a3 3 0 01-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M12 15v3M8 21h8M10 18h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function IconBook({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconClock({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function IconUnlock({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M8 11V7a4 4 0 018 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
    </svg>
  );
}

export function IconFire({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2c.5 3.5 4 6 4 10a6 6 0 11-12 0c0-4.5 3-7 4-10 1 3 4 4 4 0z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  );
}

// Map tool names to icons
export const toolIconMap: Record<string, React.FC<IconProps>> = {
  "Move Tool": IconMove,
  "Rectangular Marquee": IconMarquee,
  "Lasso Tool": IconLasso,
  "Quick Selection": IconQuickSelect,
  "Crop Tool": IconCrop,
  "Eyedropper": IconEyedropper,
  "Spot Healing Brush": IconSpotHeal,
  "Clone Stamp": IconCloneStamp,
  "Brush Tool": IconBrush,
  "Eraser Tool": IconEraser,
  "Gradient Tool": IconGradient,
  "Pen Tool": IconPen,
  "Type Tool": IconType,
  "Shape Tools": IconShape,
  "Hand Tool": IconHand,
  "Zoom Tool": IconZoom,
  "Dodge / Burn": IconDodgeBurn,
  "Healing Brush": IconHealingBrush,
};
