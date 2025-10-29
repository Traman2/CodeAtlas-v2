import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AllDocsMain from "./pages/AllDocs/AllDocsMain";
import ArticlesMain from "./pages/Articles/ArticlesMain";
import APIFinderMain from "./pages/APIFinder/APIFinderMain";
import PlanningAgentMain from "./pages/PlanningAgent/PlanningAgenMain";
import Welcome from "./pages/AllDocs/Welcome";
import WebDev from "./pages/AllDocs/WebDev";
import Mobile from "./pages/AllDocs/Mobile";
import Desktop from "./pages/AllDocs/Deskop";
import Cloud from "./pages/AllDocs/Cloud";
import Backend from "./pages/AllDocs/Backend";
import Deployment from "./pages/AllDocs/Deployment";
import DataAnalytics from "./pages/AllDocs/DataAnalytics";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Navigate to="/alldocs/welcome/overview" replace />} />
          <Route path="alldocs" element={<AllDocsMain />}>
            <Route path="welcome/:section" element={<Welcome />} />
            <Route path="welcome" element={<Navigate to="/alldocs/welcome/overview" replace />} /> {/* Default section route for welcome page */}
            <Route path="webdev" element={<WebDev />} />
            <Route path="mobile" element={<Mobile />} />
            <Route path="desktop" element={<Desktop />} />
            <Route path="cloud" element={<Cloud />} />
            <Route path="backend" element={<Backend />} />
            <Route path="deployment" element={<Deployment />} />
            <Route path="dataanalytics" element={<DataAnalytics />} />
            <Route path="" element={<Navigate to="/alldocs/welcome/overview" replace />} /> {/* Default alldocs page route */}
          </Route>
          <Route path="articles" element={<ArticlesMain />} />
          <Route path="apifinder" element={<APIFinderMain />} />
          <Route path="planningagent" element={<PlanningAgentMain />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
