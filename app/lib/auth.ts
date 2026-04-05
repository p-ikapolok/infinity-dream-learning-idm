let user: any = null;

export function saveUser(u: any, remember = false) {
  if (typeof window === "undefined") return;

  if (remember) {
    localStorage.setItem("currentUser", JSON.stringify(u));
  }

  sessionStorage.setItem("currentUser", JSON.stringify(u));
  user = u;
}

export function getCurrentUser() {
  if (typeof window === "undefined") return null;

  const data =
    localStorage.getItem("currentUser") ||
    sessionStorage.getItem("currentUser");

  return data ? JSON.parse(data) : null;
}

export function logout() {
  if (typeof window === "undefined") return;

  localStorage.removeItem("currentUser");
  sessionStorage.removeItem("currentUser");
  user = null;
}

export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return !!getCurrentUser();
}