export function toggleDark() {
  document.documentElement.classList.toggle("dark");
}

export function isDark() {
  return document.documentElement.classList.contains("dark");
}