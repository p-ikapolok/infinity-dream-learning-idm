import { useState } from "react";
import type { ReactNode } from "react";

import Header from "./header";
import Banner from "./Banner";
import CommunityHeader from "./CommunityHeader";
import Sidebar from "./CommunitySidebar";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

export default function CommunityLayout({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* HEADER */}
      <Header />

      {/* BANNER */}
      <Banner />

      {/* MAIN AREA */}
      <div className="flex flex-1 items-stretch">
        
        {/* SIDEBAR */}
        {sidebarOpen && <Sidebar />}

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col">

          {/* COMMUNITY HEADER */}
          <CommunityHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* PAGE CONTENT */}
          <main className="flex-1">
            {children}
          </main>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}