import { ReactNode } from "react";
import Header from "./header";
import Banner from "./Banner";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

export default function CommunityLayout({ children }: Props) {
  return (
    <div className="bg-gray-50 h-screen flex flex-col overflow-hidden">
      
      {/* HEADER */}
      <Header />

      {/* BANNER */}
      <Banner />

      {/* MAIN CONTENT */}
      <main className="flex-1 min-h-0 overflow-hidden">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}