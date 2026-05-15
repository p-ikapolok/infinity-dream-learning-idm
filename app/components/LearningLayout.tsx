import { useEffect, useState } from "react";
import Sidebar from "./LearningSidebar";
import Header from "./LearningHeader";
import Footer from "./LearningFooter";

export default function LearningLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // CLOSE MOBILE SIDEBAR ON DESKTOP
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return (
    <div className="flex w-full h-screen overflow-hidden bg-white">

      {/* MOBILE BACKDROP */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:relative z-50 h-full bg-white border-r border-slate-200
          transition-transform duration-300 ease-in-out
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <Sidebar
          collapsed={collapsed}
          setMobileOpen={setMobileOpen}
        />
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-col flex-1 w-full h-full overflow-hidden">

        {/* HEADER */}
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setMobileOpen={setMobileOpen}
        />

        {/* PAGE CONTENT */}
        <main className="flex-1 w-full overflow-y-auto bg-slate-50">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}