import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-recharts", title: "What is Recharts?" },
    { id: "react-integration", title: "React Integration" },
    { id: "vue-integration", title: "Vue Integration" },
    { id: "angular-integration", title: "Angular Integration" },
    { id: "chart-types", title: "Common Chart Types" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'webdev-tools-recharts',
    title: 'Recharts - Charting Library',
    category: 'WEBDEV',
    path: '/alldocs/webdev/tools/recharts',
    keywords: ['recharts', 'charts', 'data visualization', 'react', 'vue', 'angular', 'graphing'],
    description: 'Learn how to use Recharts for data visualization in React, Vue, and Angular applications.',
    searchableContent: `
        Recharts Charting Library
        Data visualization with Recharts
        React Vue Angular integration
    `.trim()
};

const reactInstall = `
# Install Recharts for React
npm install recharts
`;

const reactExample = `
// React Component with Recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
];

function SalesChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
          <Bar dataKey="profit" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
`;

const reactLineChart = `
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Week 1', users: 4000, sessions: 2400 },
  { name: 'Week 2', users: 3000, sessions: 1398 },
  { name: 'Week 3', users: 2000, sessions: 9800 },
  { name: 'Week 4', users: 2780, sessions: 3908 },
];

function UserGrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="sessions" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
`;

const vueInstall = `
# Install Recharts for Vue
# Note: Recharts is React-specific, but you can use vue3-charts or Chart.js for Vue
# However, if you need Recharts specifically, you can use it via a wrapper

# Alternative: Use vue3-charts (similar API)
npm install vue3-charts

# Or use Chart.js with vue-chartjs
npm install chart.js vue-chartjs
`;

const vueChartJsExample = `
<!-- Vue Component with Chart.js -->
<template>
  <div class="chart-container">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: '#8884d8',
      data: [4000, 3000, 2000, 2780]
    },
    {
      label: 'Profit',
      backgroundColor: '#82ca9d',
      data: [2400, 1398, 9800, 3908]
    }
  ]
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
`;

const vueRechartsWrapper = `
<!-- Using Recharts in Vue via React wrapper (advanced) -->
<!-- This requires @vue/reactivity and react-recharts-wrapper -->
<template>
  <div ref="chartContainer"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { createRoot } from 'react-dom/client'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'

const chartContainer = ref(null)
const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
]

onMounted(() => {
  const root = createRoot(chartContainer.value)
  root.render(
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" fill="#8884d8" />
    </BarChart>
  )
})
</script>
`;

const angularInstall = `
# Install Recharts for Angular
# Note: Recharts is React-specific. For Angular, use ng2-charts or Chart.js

npm install ng2-charts chart.js
npm install --save-dev @types/chart.js
`;

const angularExample = `
// app.component.ts
import { Component } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';

@Component({
  selector: 'app-sales-chart',
  template: \`
    <div style="width: 100%; height: 300px;">
      <canvas baseChart
        [data]="barChartData"
        [options]="barChartOptions"
        [type]="'bar'">
      </canvas>
    </div>
  \`
})
export class SalesChartComponent {
  public barChartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
      {
        label: 'Sales',
        data: [4000, 3000, 2000, 2780],
        backgroundColor: '#8884d8'
      },
      {
        label: 'Profit',
        data: [2400, 1398, 9800, 3908],
        backgroundColor: '#82ca9d'
      }
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };
}
`;

const angularModule = `
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { SalesChartComponent } from './sales-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesChartComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

const chartTypes = `
// React - Pie Chart
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function DeviceChart() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ name, percent }) => \`\${name} \${(percent * 100).toFixed(0)}%\`}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={\`cell-\${index}\`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

// React - Area Chart
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function RevenueChart() {
  return (
    <AreaChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}

// React - Radar Chart
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const radarData = [
  { subject: 'Performance', A: 120, B: 110 },
  { subject: 'Features', A: 98, B: 130 },
  { subject: 'Design', A: 86, B: 130 }
];

function ComparisonChart() {
  return (
    <RadarChart width={500} height={300} data={radarData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Product A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Product B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
    </RadarChart>
  );
}
`;

export default function RechartsDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">TOOLS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Recharts - Charting Library
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Learn how to integrate Recharts for beautiful data visualizations in React, Vue, and Angular
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:chart-line" className="w-70 h-70 text-[#554DE2]"/>
            </div>

            <h2 id="what-is-recharts" className="text-2xl font-semibold mt-12 mb-4">
                What is Recharts?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Recharts is a composable charting library built on React components. It's declarative, responsive,
                and provides a simple API for creating beautiful charts. While Recharts is built specifically for React,
                we'll also show you how to achieve similar results in Vue and Angular using alternative libraries.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• Built specifically for React</li>
                            <li>• Composable components (Bar, Line, Pie, etc.)</li>
                            <li>• Responsive by default</li>
                            <li>• Highly customizable</li>
                            <li>• TypeScript support</li>
                            <li>• Supports many chart types</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="react-integration" className="text-2xl font-semibold mt-12 mb-4">
                React Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Recharts is designed for React, so integration is straightforward. Install the package and start using
                chart components in your React components.
            </p>

            <div className="mb-6">
                <CodeBlock code={reactInstall} language="bash" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Here's a simple bar chart example:
            </p>

            <div className="mb-6">
                <CodeBlock code={reactExample} language="tsx" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                And here's a line chart example:
            </p>

            <div className="mb-6">
                <CodeBlock code={reactLineChart} language="tsx" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">React Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Always wrap charts in <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">ResponsiveContainer</code> for responsiveness</li>
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">dataKey</code> prop to specify which data field to use</li>
                    <li>• Customize colors using <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">fill</code> and <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">stroke</code> props</li>
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">Tooltip</code> and <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">Legend</code> for better UX</li>
                </ul>
            </div>

            <h2 id="vue-integration" className="text-2xl font-semibold mt-12 mb-4">
                Vue Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Since Recharts is React-specific, Vue developers should use <strong>vue-chartjs</strong> or
                <strong>vue3-charts</strong> for similar functionality. Chart.js provides a similar API and works
                excellently with Vue.
            </p>

            <div className="mb-6">
                <CodeBlock code={vueInstall} language="bash" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Here's how to create charts in Vue using Chart.js:
            </p>

            <div className="mb-6">
                <CodeBlock code={vueChartJsExample} language="vue" />
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">💡 Advanced: Using Recharts in Vue</h3>
                <p className="text-[#4B5563] leading-relaxed mb-3">
                    If you specifically need Recharts in Vue, you can use it via React's renderer, though this is
                    more complex and not recommended for most use cases.
                </p>
                <div className="mb-3">
                    <CodeBlock code={vueRechartsWrapper} language="vue" />
                </div>
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Vue Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">vue-chartjs</code> for Vue 3 compatibility</li>
                    <li>• Register Chart.js components in your component's setup</li>
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">ref</code> for reactive chart data</li>
                    <li>• Set <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">maintainAspectRatio: false</code> for custom sizing</li>
                </ul>
            </div>

            <h2 id="angular-integration" className="text-2xl font-semibold mt-12 mb-4">
                Angular Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                For Angular, use <strong>ng2-charts</strong> which wraps Chart.js. It provides Angular directives
                and integrates seamlessly with Angular's component system.
            </p>

            <div className="mb-6">
                <CodeBlock code={angularInstall} language="bash" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                First, import the module:
            </p>

            <div className="mb-6">
                <CodeBlock code={angularModule} language="typescript" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Then create your chart component:
            </p>

            <div className="mb-6">
                <CodeBlock code={angularExample} language="typescript" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Angular Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Import <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">NgChartsModule</code> in your module</li>
                    <li>• Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">baseChart</code> directive in templates</li>
                    <li>• Configure chart data and options as component properties</li>
                    <li>• Use TypeScript interfaces for type safety</li>
                </ul>
            </div>

            <h2 id="chart-types" className="text-2xl font-semibold mt-12 mb-4">
                Common Chart Types
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Here are examples of different chart types you can create. These examples are for React/Recharts,
                but similar patterns apply to Vue and Angular with their respective libraries.
            </p>

            <div className="mb-6">
                <CodeBlock code={chartTypes} language="tsx" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2">Bar Chart</h4>
                    <p className="text-sm text-[#4B5563]">
                        Compare values across categories. Perfect for sales data, comparisons, and rankings.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2">Line Chart</h4>
                    <p className="text-sm text-[#4B5563]">
                        Show trends over time. Great for tracking metrics, growth, and changes.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2">Pie Chart</h4>
                    <p className="text-sm text-[#4B5563]">
                        Display proportions and percentages. Useful for market share, distribution, and composition.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2">Area Chart</h4>
                    <p className="text-sm text-[#4B5563]">
                        Similar to line charts but with filled areas. Emphasizes volume and cumulative values.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2">Radar Chart</h4>
                    <p className="text-sm text-[#4B5563]">
                        Compare multiple variables. Perfect for performance reviews, skill assessments, and comparisons.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2">Scatter Plot</h4>
                    <p className="text-sm text-[#4B5563]">
                        Show relationships between two variables. Useful for correlation analysis and data exploration.
                    </p>
                </div>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Always Use Responsive Containers</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Wrap your charts in responsive containers to ensure they adapt to different screen sizes.
                        This is especially important for mobile devices.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Provide Accessible Labels</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Always include proper labels, legends, and tooltips. This makes your charts accessible
                        and easier to understand.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Optimize for Performance</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        For large datasets, consider data aggregation or pagination. Too many data points can
                        slow down rendering and make charts hard to read.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. Use Consistent Colors</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Establish a color palette and use it consistently across all charts. This improves
                        brand consistency and user experience.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">5. Handle Loading States</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Show loading indicators while data is being fetched. Empty states are also important
                        when there's no data to display.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Framework Comparison</h3>
                <div className="space-y-3 text-[#4B5563]">
                    <div>
                        <strong>React:</strong> Use Recharts directly - it's built for React and provides the best experience.
                    </div>
                    <div>
                        <strong>Vue:</strong> Use vue-chartjs or vue3-charts - Chart.js has similar capabilities and works great with Vue.
                    </div>
                    <div>
                        <strong>Angular:</strong> Use ng2-charts - it wraps Chart.js and integrates seamlessly with Angular's architecture.
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/webdev/vite")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/webdev/shadcn")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:package-variant" width="40" height="40" className="text-[#554DE2]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Tools - Shadcn/ui</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

