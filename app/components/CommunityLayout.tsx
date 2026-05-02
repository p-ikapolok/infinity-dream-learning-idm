import { ReactNode } from "react";
import Header from "./header";
import Banner from "./Banner";
import CommunityHeader from "./CommunityHeader";
import Sidebar from "./CommunitySidebar";
import Footer from "./footer";

type Props = {
  children: ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

export default function CommunityLayout({
  children,
  sidebarOpen,
  setSidebarOpen,
}: Props) {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* HEADER 1 */}
      <Header />

      {/* BANNER */}
      <Banner />

      {/* HEADER 2 (Community Header) */}
      <CommunityHeader
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN AREA */}
      <div className="flex flex-1 items-stretch">
        {/* SIDEBAR */}
        {sidebarOpen && <Sidebar />}

        {/* PAGE CONTENT */}
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}