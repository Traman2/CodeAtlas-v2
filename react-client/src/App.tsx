import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllDocsMain from "./pages/AllDocs/AllDocsMain";
import ArticlesMain from "./pages/Articles/ArticlesMain";
import APIFinderMain from "./pages/APIFinder/APIFinderMain";
import PlanningAgentMain from "./pages/PlanningAgent/PlanningAgenMain";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="AllDocs" element={<AllDocsMain />} />
          <Route path="Articles" element={<ArticlesMain />} />
          <Route path="APIFinder" element={<APIFinderMain />} />
          <Route path="PlanningAgent" element={<PlanningAgentMain />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
