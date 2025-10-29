import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function AllDocsMain() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = location.pathname.split("/")[2] || "welcome";

  return (
    <div className="flex flex-col h-dvh overflow-hidden bg-[#F9FAFB]">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar defaultPage="allDocs" />
        <nav className="flex pt-3 gap-6 px-6 border-b border-black/20 shrink-0">
          <button
            onClick={() => navigate("/alldocs/welcome/overview")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${currentTab === "welcome" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Welcome
          </button>
          <button
            onClick={() => navigate("/alldocs/webdev")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${currentTab === "webdev" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Web Dev
          </button>
          <button
            onClick={() => navigate("/alldocs/mobile")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${currentTab === "mobile" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Mobile
          </button>
          <button
            onClick={() => navigate("/alldocs/desktop")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${currentTab === "desktop" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Desktop
          </button>
          <button
            onClick={() => navigate("/alldocs/cloud")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${currentTab === "cloud" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Cloud
          </button>
          <button
            onClick={() => navigate("/alldocs/backend")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${currentTab === "backend" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Backend
          </button>
          <button
            onClick={() => navigate("/alldocs/deployment")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${currentTab === "deployment" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Deployment
          </button>
          <button
            onClick={() => navigate("/alldocs/dataanalytics")}
            className={`border-b-2 pb-2 font-semibold cursor-pointer ${currentTab === "dataanalytics" ? "border-[#554DE2] text-[#554DE2]" : "border-transparent text-[#4B5563]"}`}
          >
            Data Analytics
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
