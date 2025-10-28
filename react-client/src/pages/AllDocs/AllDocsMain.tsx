import Navbar from "../../components/Navbar";

export default function AllDocsMain() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar defaultPage="allDocs" />
      <nav className="flex pt-3 gap-4 px-6 border-b shrink-0">
        <button className="border-b-2 pb-2 border-[#554DE2] text-[#554DE2] font-semibold">Welcome</button>
        <button className="border-b-2 pb-2 border-transparent text-[#4B5563]">Web Dev</button>
        <button className="border-b-2 pb-2 border-transparent text-[#4B5563]">Mobile</button>
        <button className="border-b-2 pb-2 border-transparent text-[#4B5563]">Desktop</button>
        <button className="border-b-2 pb-2 border-transparent text-[#4B5563]">Cloud</button>
        <button className="border-b-2 pb-2 border-transparent text-[#4B5563]">Backend</button>
        <button className="border-b-2 pb-2 border-transparent text-[#4B5563]">Deployment</button>
        <button className="border-b-2 pb-2 border-transparent text-[#4B5563]">Data Analytics</button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 pt-4 px-6 max-w-70 overflow-y-auto">
          Tabs 1
        </div>

        <div className="flex-1 pt-4 flex justify-center">
          <div className="min-w-190">
            Content floating 2
          </div>
        </div>

        <div className="flex-1 pt-4 max-w-70 overflow-y-auto hidden xl:block">
          On page 3
        </div>
      </div>
    </div>
  );
}
