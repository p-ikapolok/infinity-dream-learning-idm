import { ReactNode } from "react";
import PublicNavbar from "./public-navbar";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />

      <main>
        {children}
      </main>
    </div>
  );
}