import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, PieChart, Pie, Cell } from 'recharts';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-matplotlib", title: "What is Matplotlib?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "line-plots", title: "Line Plots" },
    { id: "bar-charts", title: "Bar Charts" },
    { id: "scatter-plots", title: "Scatter Plots" },
    { id: "other-charts", title: "Other Chart Types" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'dataanalytics-matplotlib',
    title: 'Matplotlib - Data Visualization',
    category: 'DATAANALYTICS',
    path: '/alldocs/dataanalytics/matplotlib',
    keywords: ['matplotlib', 'visualization', 'charts', 'graphs', 'plots', 'data visualization'],
    description: 'Complete guide to Matplotlib for creating charts, graphs, and visualizations including line plots, bar charts, scatter plots, and more.',
    searchableContent: `
        Matplotlib data visualization
        Charts graphs plots
        Line bar scatter pie charts
    `.trim()
};

const matplotlibSetup = `
# Install Matplotlib
pip install matplotlib

# Import Matplotlib
import matplotlib.pyplot as plt
import numpy as np
`;

const linePlotExample = `
import matplotlib.pyplot as plt
import numpy as np

# Generate data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create line plot
plt.figure(figsize=(10, 6))
plt.plot(x, y, label='sin(x)', linewidth=2)
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.title('Sine Wave')
plt.legend()
plt.grid(True)
plt.show()
`;

const barChartExample = `
import matplotlib.pyplot as plt

# Data
categories = ['A', 'B', 'C', 'D', 'E']
values = [23, 45, 56, 78, 32]

# Create bar chart
plt.figure(figsize=(10, 6))
plt.bar(categories, values, color=['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'])
plt.xlabel('Categories')
plt.ylabel('Values')
plt.title('Bar Chart Example')
plt.show()
`;

const scatterPlotExample = `
import matplotlib.pyplot as plt
import numpy as np

# Generate data
np.random.seed(42)
x = np.random.randn(100)
y = 2 * x + np.random.randn(100) * 0.5

# Create scatter plot
plt.figure(figsize=(10, 6))
plt.scatter(x, y, alpha=0.6, s=50)
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Scatter Plot Example')
plt.show()
`;

// Sample data for visualizations
const lineData = [
    { x: 0, y: 0 },
    { x: 1, y: 0.84 },
    { x: 2, y: 0.91 },
    { x: 3, y: 0.14 },
    { x: 4, y: -0.76 },
    { x: 5, y: -0.96 },
    { x: 6, y: -0.28 },
    { x: 7, y: 0.66 },
    { x: 8, y: 0.99 },
    { x: 9, y: 0.41 },
    { x: 10, y: -0.54 }
];

const barData = [
    { category: 'A', value: 23 },
    { category: 'B', value: 45 },
    { category: 'C', value: 56 },
    { category: 'D', value: 78 },
    { category: 'E', value: 32 }
];

const scatterData = Array.from({ length: 50 }, (_) => ({
    x: Math.random() * 10 - 5,
    y: Math.random() * 10 - 5 + (Math.random() * 10 - 5) * 0.3
}));

const pieData = [
    { name: 'Category A', value: 35 },
    { name: 'Category B', value: 25 },
    { name: 'Category C', value: 20 },
    { name: 'Category D', value: 20 }
];

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'];

export default function MatplotlibDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">DATA ANALYTICS LIBRARIES</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Matplotlib - Data Visualization
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Comprehensive library for creating static, animated, and interactive visualizations in Python
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:chart-bar" className="w-70 h-70 text-[#11557C]"/>
            </div>

            <h2 id="what-is-matplotlib" className="text-2xl font-semibold mt-12 mb-4">
                What is Matplotlib?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in 
                Python. It's the most popular plotting library in Python and is widely used in data science and research.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Matplotlib provides a MATLAB-like interface and can create a wide variety of plots including line plots, 
                bar charts, scatter plots, histograms, pie charts, and more. It's essential for data exploration and 
                communicating insights.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Use Matplotlib?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Versatile:</strong> Create many types of charts and plots</li>
                            <li>• <strong>Customizable:</strong> Fine control over every aspect of plots</li>
                            <li>• <strong>Publication Quality:</strong> Create high-quality figures for papers</li>
                            <li>• <strong>Integration:</strong> Works well with NumPy and Pandas</li>
                            <li>• <strong>Widely Used:</strong> Standard in data science workflows</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <div className="mb-6">
                <CodeBlock code={matplotlibSetup} language="bash" />
            </div>

            <h2 id="line-plots" className="text-2xl font-semibold mt-12 mb-4">
                Line Plots
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Create line plots to visualize trends over time or relationships between variables:
            </p>

            <div className="mb-6">
                <CodeBlock code={linePlotExample} language="python" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Example line plot visualization:
            </p>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Line Plot Example</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={lineData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="x" label={{ value: 'X axis', position: 'insideBottom', offset: -5 }} />
                        <YAxis label={{ value: 'Y axis', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Line type="monotone" dataKey="y" stroke="#8884d8" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <h2 id="bar-charts" className="text-2xl font-semibold mt-12 mb-4">
                Bar Charts
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Create bar charts to compare categories:
            </p>

            <div className="mb-6">
                <CodeBlock code={barChartExample} language="python" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Example bar chart visualization:
            </p>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Bar Chart Example</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <h2 id="scatter-plots" className="text-2xl font-semibold mt-12 mb-4">
                Scatter Plots
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Create scatter plots to visualize relationships between two variables:
            </p>

            <div className="mb-6">
                <CodeBlock code={scatterPlotExample} language="python" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Example scatter plot visualization:
            </p>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Scatter Plot Example</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <ScatterChart data={scatterData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="x" label={{ value: 'X', position: 'insideBottom', offset: -5 }} />
                        <YAxis dataKey="y" label={{ value: 'Y', angle: -90, position: 'insideLeft' }} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter dataKey="y" fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>

            <h2 id="other-charts" className="text-2xl font-semibold mt-12 mb-4">
                Other Chart Types
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Matplotlib can create many other chart types. Here's an example pie chart:
            </p>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Pie Chart Example</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent ?? 0 * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Histograms</h3>
                    <p className="text-[#4B5563]">
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">plt.hist()</code> - 
                        Visualize distribution of numerical data
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Heatmaps</h3>
                    <p className="text-[#4B5563]">
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">plt.imshow()</code> or 
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">seaborn.heatmap()</code> - 
                        Visualize correlation matrices or 2D data
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Subplots</h3>
                    <p className="text-[#4B5563]">
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">plt.subplots()</code> - 
                        Create multiple plots in a single figure
                    </p>
                </div>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        1
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Appropriate Chart Types</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Choose the right chart type for your data. Line plots for trends, bar charts for comparisons, 
                            scatter plots for relationships.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Label Your Axes</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Always include axis labels and a title. Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">plt.xlabel()</code>, 
                            <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">plt.ylabel()</code>, and 
                            <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">plt.title()</code>.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Seaborn for Better Defaults</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Consider using Seaborn (built on Matplotlib) for statistical visualizations. It provides 
                            better default styles and easier-to-use functions.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Save Figures</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">plt.savefig()</code> 
                            to save figures in various formats (PNG, PDF, SVG) for reports and presentations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:link" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Related Resources</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/pandas")} className="text-[#554DE2] hover:underline">Visualize Pandas DataFrames</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/scikit-learn")} className="text-[#554DE2] hover:underline">Visualize Model Results</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/pytorch")} className="text-[#554DE2] hover:underline">Visualize Training Metrics</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/dataanalytics/numpy")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

