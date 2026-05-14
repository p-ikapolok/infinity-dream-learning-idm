import { useState } from "react";
import Sidebar from "./LearningSidebar";
import Header from "./LearningHeader";
import Footer from "./LearningFooter";

export default function LearningLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar collapsed={collapsed} />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">

        {/* HEADER */}
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </div>
  );
}