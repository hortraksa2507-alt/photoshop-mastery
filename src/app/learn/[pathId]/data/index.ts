import type { PathData } from "./types";
import { path1 } from "./path1";
import { path2 } from "./path2";
import { path3 } from "./path3";
import { path4 } from "./path4";
import { path5 } from "./path5";
import { path6 } from "./path6";
import { path7 } from "./path7";
import { path8 } from "./path8";

export type { Lesson, PathData, ContentSection } from "./types";

export const pathsData: Record<string, PathData> = {
  "1": path1,
  "2": path2,
  "3": path3,
  "4": path4,
  "5": path5,
  "6": path6,
  "7": path7,
  "8": path8,
};
