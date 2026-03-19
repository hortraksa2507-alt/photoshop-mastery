export interface ContentSection {
  heading: string;
  body: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  keyTakeaways: string[];
  content: ContentSection[];
}

export interface PathData {
  id: number;
  title: string;
  level: string;
  levelColor: string;
  description: string;
  lessons: Lesson[];
}
