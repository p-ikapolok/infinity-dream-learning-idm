let enrolled: string[] = [];

export function enroll(courseId: string) {
  if (!enrolled.includes(courseId)) {
    enrolled.push(courseId);
  }
}

export function isEnrolled(courseId: string) {
  return enrolled.includes(courseId);
}

export function getMyCourses() {
  return enrolled;
}