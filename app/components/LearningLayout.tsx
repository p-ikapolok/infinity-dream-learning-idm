import Sidebar from "../components/LearningSidebar";
import Header from "../components/LearningHeader";
import Footer from "../components/LearningFooter";

export default function DashboardLayout({
  children,
  collapsed,
  setCollapsed,
}) {
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