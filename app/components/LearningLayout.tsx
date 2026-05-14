import { useEffect, useState } from "react";
import Sidebar from "./LearningSidebar";
import Header from "./LearningHeader";
import Footer from "./LearningFooter";

export default function LearningLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile sidebar when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* BACKDROP (MOBILE ONLY) */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed md:relative z-50 h-full bg-white border-r
          transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <Sidebar
          collapsed={collapsed}
          setMobileOpen={setMobileOpen}
        />
      </div>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">

        {/* HEADER */}
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setMobileOpen={setMobileOpen}
        />

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </div>
  );
}