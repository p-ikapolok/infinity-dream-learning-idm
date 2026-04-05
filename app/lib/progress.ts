let progress: Record<string, number[]> = {};

export function markComplete(course: string, lesson: number) {
  if (!progress[course]) {
    progress[course] = [];
  }

  if (!progress[course].includes(lesson)) {
    progress[course].push(lesson);
  }
}

export function getProgress(course: string) {
  return progress[course] || [];
}

export function getPercent(course: string, total: number) {
  const done = getProgress(course).length;
  return Math.round((done / total) * 100);
}