import { useState } from "react";
import Navbar from "../../components/Navbar";
import Welcome from "./Welcome";
import WebDev from "./WebDev";
import Mobile from "./Mobile";
import Desktop from "./Deskop";
import Cloud from "./Cloud";
import Backend from "./Backend";
import Deployment from "./Deployment";
import DataAnalytics from "./DataAnalytics";

export default function AllDocsMain() {
  const [tab, setActiveTab] = useState("Welcome");

  function renderTab() {
    switch (tab) {
      case "Welcome":
        return <Welcome />;
      case "Web Dev":
        return <WebDev />;
      case "Mobile":
        return <Mobile />;
      case "Desktop":
        return <Desktop />;
      case "Cloud":
        return <Cloud />;
      case "Backend":
        return <Backend />;
      case "Deployment":
        return <Deployment />;
      case "Data Analytics":
        return <DataAnalytics />;
      default:
        return <Welcome />;
    }
  }


  return (
    <div className="flex flex-col h-dvh overflow-hidden bg-[#F9FAFB]">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar defaultPage="allDocs" />
        <nav className="flex pt-3 gap-6 px-6 border-b border-black/20 shrink-0">
          <button
            onClick={() => setActiveTab("Welcome")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${tab === "Welcome" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Welcome
          </button>
          <button
            onClick={() => setActiveTab("Web Dev")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${tab === "Web Dev" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Web Dev
          </button>
          <button
            onClick={() => setActiveTab("Mobile")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${tab === "Mobile" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Mobile
          </button>
          <button
            onClick={() => setActiveTab("Desktop")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${tab === "Desktop" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Desktop
          </button>
          <button
            onClick={() => setActiveTab("Cloud")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${tab === "Cloud" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Cloud
          </button>
          <button
            onClick={() => setActiveTab("Backend")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${tab === "Backend" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab("Deployment")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${tab === "Deployment" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Deployment
          </button>
          <button
            onClick={() => setActiveTab("Data Analytics")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${tab === "Data Analytics" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Data Analytics
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {renderTab()}
      </div>
    </div>
  );
}
