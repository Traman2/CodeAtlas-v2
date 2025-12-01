import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "analytics-platforms", title: "Analytics Platforms" },
    { id: "data-technologies", title: "Data Technologies" }
]

export const metadata: GuideMetadata = {
    id: 'dataanalytics',
    title: 'Data Analytics',
    category: 'WELCOME',
    path: '/alldocs/welcome/dataanalytics',
    keywords: ['data', 'analytics', 'metrics', 'monitoring', 'tracking', 'insights', 'pandas', 'spark', 'tableau', 'power bi'],
    description: 'Explore data processing, analysis, and visualization tools. Learn how to extract insights from data using modern analytics platforms and libraries.',
    searchableContent: `
        Data Analytics
        Explore data processing, analysis, and visualization tools. Learn how to extract insights from data using modern analytics platforms and libraries.
        Analytics Platforms
        Python Data Stack
        Powerful libraries for data analysis. Work with Pandas for data manipulation, NumPy for numerical computing, and Matplotlib/Seaborn for visualization.
        Apache Spark
        Unified analytics engine for large-scale data processing. Handle big data workloads with distributed computing capabilities.
        Tableau & Power BI
        Business intelligence and visualization tools. Create interactive dashboards and reports for data-driven decision making.
        Data Technologies
        SQL and database querying techniques
        Data warehousing with Snowflake and Redshift
        Real-time analytics with streaming platforms
        Machine learning integration
        ETL pipelines and data orchestration
    `.trim()
};

export default function DataAnalyticsDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">APP LOGIC</p>
            <h1 className="text-3xl font-semibold mt-2">Data Analytics</h1>
            <p className="mt-2">
                Explore data processing, analysis, and visualization tools. Learn how to
                extract insights from data using modern analytics platforms and libraries.
            </p>

            <h2 id="analytics-platforms" className="text-2xl font-semibold mt-8 mb-4">Analytics Platforms</h2>
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Python Data Stack</h3>
                    <p className="mt-2 text-gray-700">
                        Powerful libraries for data analysis. Work with Pandas for data manipulation,
                        NumPy for numerical computing, and Matplotlib/Seaborn for visualization.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Apache Spark</h3>
                    <p className="mt-2 text-gray-700">
                        Unified analytics engine for large-scale data processing. Handle big
                        data workloads with distributed computing capabilities.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Tableau & Power BI</h3>
                    <p className="mt-2 text-gray-700">
                        Business intelligence and visualization tools. Create interactive
                        dashboards and reports for data-driven decision making.
                    </p>
                </div>
            </div>

            <h2 id="data-technologies" className="text-2xl font-semibold mt-8 mb-4">Data Technologies</h2>
            <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                <li>SQL and database querying techniques</li>
                <li>Data warehousing with Snowflake and Redshift</li>
                <li>Real-time analytics with streaming platforms</li>
                <li>Machine learning integration</li>
                <li>ETL pipelines and data orchestration</li>
            </ul>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/welcome/deployment")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/welcome/apifinder")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:api" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Code Atlas Tools - API Finder</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}
