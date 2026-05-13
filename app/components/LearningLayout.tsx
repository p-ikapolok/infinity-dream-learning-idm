import { useState } from "react";
import Sidebar from "./LearningSidebar";
import Header from "./LearningHeader";
import Footer from "./LearningFooter";

export default function LearningLayout({
  children,
}) {

const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <Sidebar
        collapsed={collapsed}
      />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* HEADER */}
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}