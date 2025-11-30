import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AllDocsMain from "./pages/AllDocs/AllDocsMain";
import ArticlesMain from "./pages/Articles/ArticlesMain";
import APIFinderMain from "./pages/APIFinder/APIFinderMain";
import PlanningAgentMain from "./pages/PlanningAgent/PlanningAgentMain";
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
            <Route path="webdev/:section" element={<WebDev />} />
            <Route path="webdev" element={<Navigate to="/alldocs/webdev/overview" replace />} /> {/* Default section route for webdev page */}
            <Route path="mobile/:section" element={<Mobile />} />
            <Route path="mobile" element={<Navigate to="/alldocs/mobile/overview" replace />} /> {/* Default section route for mobile page */}
            <Route path="desktop/:section" element={<Desktop />} />
            <Route path="desktop" element={<Navigate to="/alldocs/desktop/overview" replace />} /> {/* Default section route for desktop page */}
            <Route path="cloud/:section" element={<Cloud />} />
            <Route path="cloud" element={<Navigate to="/alldocs/cloud/overview" replace />} /> {/* Default section route for cloud page */}
            <Route path="backend/:section" element={<Backend />} />
            <Route path="backend" element={<Navigate to="/alldocs/backend/overview" replace />} /> {/* Default section route for backend page */}
            <Route path="deployment/:section" element={<Deployment />} />
            <Route path="deployment" element={<Navigate to="/alldocs/deployment/overview" replace />} /> {/* Default section route for deployment page */}
            <Route path="dataanalytics/:section" element={<DataAnalytics />} />
            <Route path="dataanalytics" element={<Navigate to="/alldocs/dataanalytics/overview" replace />} /> {/* Default section route for dataanalytics page */}
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
