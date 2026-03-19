"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  photoUrl: string;
  isPremium: boolean;
}

export interface LessonProgress {
  id: string;
  title: string;
  progress: number;
  lastAccessed: string;
  completed: boolean;
}

export interface ChallengeProgress {
  id: number;
  completed: boolean;
  completedAt?: string;
}

export interface PathProgress {
  id: number;
  progress: number;
  lessonsCompleted: number;
  totalLessons: number;
  started: boolean;
}

interface AppState {
  user: UserProfile | null;
  lessonsCompleted: number;
  hoursPracticed: number;
  skillsUnlocked: number;
  dayStreak: number;
  totalXP: number;
  lessonProgress: LessonProgress[];
  challengeProgress: ChallengeProgress[];
  pathProgress: PathProgress[];
  currentPath: number | null;
  onboardingDone: boolean;
}

interface AppContextType {
  state: AppState;
  setUser: (user: UserProfile) => void;
  startPath: (pathId: number) => void;
  updatePathProgress: (pathId: number, progress: number) => void;
  completeChallenge: (challengeId: number, xp: number) => void;
  updateLessonProgress: (lesson: LessonProgress) => void;
  completeOnboarding: () => void;
  addXP: (amount: number) => void;
  resetProgress: () => void;
}

const freshState: AppState = {
  user: null,
  lessonsCompleted: 0,
  hoursPracticed: 0,
  skillsUnlocked: 0,
  dayStreak: 0,
  totalXP: 0,
  lessonProgress: [],
  challengeProgress: [],
  pathProgress: [
    { id: 1, progress: 0, lessonsCompleted: 0, totalLessons: 16, started: false },
    { id: 2, progress: 0, lessonsCompleted: 0, totalLessons: 12, started: false },
    { id: 3, progress: 0, lessonsCompleted: 0, totalLessons: 20, started: false },
    { id: 4, progress: 0, lessonsCompleted: 0, totalLessons: 14, started: false },
    { id: 5, progress: 0, lessonsCompleted: 0, totalLessons: 18, started: false },
    { id: 6, progress: 0, lessonsCompleted: 0, totalLessons: 22, started: false },
    { id: 7, progress: 0, lessonsCompleted: 0, totalLessons: 10, started: false },
    { id: 8, progress: 0, lessonsCompleted: 0, totalLessons: 15, started: false },
  ],
  currentPath: null,
  onboardingDone: false,
};

const STORAGE_PREFIX = "ps-mastery-";

function getStorageKey(userId: string) {
  return `${STORAGE_PREFIX}${userId}`;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(freshState);
  const [hydrated, setHydrated] = useState(false);

  // Load user data and initialize Telegram WebApp
  useEffect(() => {
    // Try to get Telegram user data
    let telegramUser: UserProfile | null = null;
    try {
      const tg = (window as unknown as Record<string, unknown>).Telegram as {
        WebApp?: {
          initDataUnsafe?: {
            user?: {
              id: number;
              first_name: string;
              last_name?: string;
              username?: string;
              photo_url?: string;
              is_premium?: boolean;
            };
          };
          ready: () => void;
          expand: () => void;
          setHeaderColor: (color: string) => void;
          setBackgroundColor: (color: string) => void;
        };
      } | undefined;

      const webApp = tg?.WebApp;
      if (webApp) {
        // Signal to Telegram that the app is ready
        webApp.ready();
        // Expand to full screen
        webApp.expand();
        // Match our Claude theme colors
        webApp.setHeaderColor("#1A1915");
        webApp.setBackgroundColor("#1A1915");
      }

      const webAppUser = webApp?.initDataUnsafe?.user;
      if (webAppUser) {
        telegramUser = {
          id: String(webAppUser.id),
          firstName: webAppUser.first_name,
          lastName: webAppUser.last_name || "",
          username: webAppUser.username || "",
          photoUrl: webAppUser.photo_url || "",
          isPremium: webAppUser.is_premium || false,
        };
      }
    } catch {
      // Not in Telegram context
    }

    // Fallback: guest user for web testing
    if (!telegramUser) {
      telegramUser = {
        id: "guest",
        firstName: "Guest",
        lastName: "User",
        username: "guest",
        photoUrl: "",
        isPremium: false,
      };
    }

    // Load this user's saved state
    const key = getStorageKey(telegramUser.id);
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed = JSON.parse(saved);
        setState({ ...freshState, ...parsed, user: telegramUser });
      } else {
        setState({ ...freshState, user: telegramUser });
      }
    } catch {
      setState({ ...freshState, user: telegramUser });
    }

    setHydrated(true);
  }, []);

  // Save to localStorage on changes (per-user)
  useEffect(() => {
    if (hydrated && state.user) {
      const key = getStorageKey(state.user.id);
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch {
        // Storage full
      }
    }
  }, [state, hydrated]);

  const setUser = useCallback((user: UserProfile) => {
    setState((prev) => ({ ...prev, user }));
  }, []);

  const startPath = useCallback((pathId: number) => {
    setState((prev) => ({
      ...prev,
      currentPath: pathId,
      pathProgress: prev.pathProgress.map((p) =>
        p.id === pathId ? { ...p, started: true } : p
      ),
    }));
  }, []);

  const updatePathProgress = useCallback((pathId: number, progress: number) => {
    setState((prev) => ({
      ...prev,
      pathProgress: prev.pathProgress.map((p) =>
        p.id === pathId
          ? { ...p, progress: Math.min(100, progress), lessonsCompleted: Math.round((Math.min(100, progress) / 100) * p.totalLessons) }
          : p
      ),
    }));
  }, []);

  const completeChallenge = useCallback((challengeId: number, xp: number) => {
    setState((prev) => {
      if (prev.challengeProgress.some((c) => c.id === challengeId && c.completed)) return prev;

      const newChallengeProgress = [...prev.challengeProgress];
      const idx = newChallengeProgress.findIndex((c) => c.id === challengeId);
      const entry = { id: challengeId, completed: true, completedAt: new Date().toISOString() };
      if (idx >= 0) newChallengeProgress[idx] = entry;
      else newChallengeProgress.push(entry);

      return {
        ...prev,
        challengeProgress: newChallengeProgress,
        totalXP: prev.totalXP + xp,
        lessonsCompleted: prev.lessonsCompleted + 1,
        skillsUnlocked: prev.skillsUnlocked + 1,
      };
    });
  }, []);

  const updateLessonProgress = useCallback((lesson: LessonProgress) => {
    setState((prev) => {
      const newList = [...prev.lessonProgress];
      const idx = newList.findIndex((l) => l.id === lesson.id);
      if (idx >= 0) newList[idx] = lesson;
      else newList.push(lesson);

      const wasAlreadyCompleted = idx >= 0 && prev.lessonProgress[idx].completed;
      const nowCompleted = lesson.completed && !wasAlreadyCompleted;

      return {
        ...prev,
        lessonProgress: newList,
        lessonsCompleted: nowCompleted ? prev.lessonsCompleted + 1 : prev.lessonsCompleted,
        hoursPracticed: prev.hoursPracticed + 0.25,
      };
    });
  }, []);

  const completeOnboarding = useCallback(() => {
    setState((prev) => ({ ...prev, onboardingDone: true }));
  }, []);

  const addXP = useCallback((amount: number) => {
    setState((prev) => ({ ...prev, totalXP: prev.totalXP + amount }));
  }, []);

  const resetProgress = useCallback(() => {
    setState((prev) => ({ ...freshState, user: prev.user }));
  }, []);

  return (
    <AppContext.Provider
      value={{ state, setUser, startPath, updatePathProgress, completeChallenge, updateLessonProgress, completeOnboarding, addXP, resetProgress }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
