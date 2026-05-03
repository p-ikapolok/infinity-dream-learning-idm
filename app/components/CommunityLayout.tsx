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

<div className="bg-gray-50 h-screen flex flex-col overflow-hidden">  

{/* HEADER 1 */}  
<Header />  

{/* BANNER */}
<Banner />

{/* MAIN AREA */}

<div className="flex flex-1 min-h-0">  {/* SIDEBAR */}

  <aside  
    className={`bg-white border-r transition-all duration-300 ${  
      sidebarOpen ? "w-72" : "w-0 overflow-hidden"  
    }`}  
  >  
    <Sidebar />  
  </aside> 

 {/* RIGHT SIDE */}

  <div className="flex-1 flex flex-col min-h-0">  <CommunityHeader  
  sidebarOpen={sidebarOpen}  
  setSidebarOpen={setSidebarOpen}  
/>  

{children}

  </div>  </div>  {/* FOOTER */}

  <Footer />    
</div> 
 );
}