import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-sklearn", title: "What is SciKit-learn?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "linear-regression", title: "Linear Regression" },
    { id: "other-algorithms", title: "Other Algorithms" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'dataanalytics-scikit-learn',
    title: 'SciKit-learn - Machine Learning Library',
    category: 'DATAANALYTICS',
    path: '/alldocs/dataanalytics/scikit-learn',
    keywords: ['scikit-learn', 'sklearn', 'machine learning', 'linear regression', 'classification', 'clustering'],
    description: 'Complete guide to SciKit-learn for machine learning including linear regression, classification, clustering, and more.',
    searchableContent: `
        SciKit-learn machine learning
        Linear regression classification
        Traditional ML algorithms
    `.trim()
};

const sklearnSetup = `
# Install SciKit-learn
pip install scikit-learn

# Also install dependencies
pip install numpy pandas matplotlib
`;

const linearRegressionExample = `
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# Generate sample data
np.random.seed(42)
X = np.random.rand(100, 1) * 10
y = 2.5 * X.flatten() + 1.5 + np.random.randn(100) * 2

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f'Mean Squared Error: {mse:.2f}')
print(f'R² Score: {r2:.2f}')
print(f'Coefficients: {model.coef_[0]:.2f}')
print(f'Intercept: {model.intercept_:.2f}')

# Plot the results
plt.scatter(X_test, y_test, color='blue', label='Actual')
plt.plot(X_test, y_pred, color='red', linewidth=2, label='Predicted')
plt.xlabel('X')
plt.ylabel('y')
plt.title('Linear Regression')
plt.legend()
plt.show()
`;

const classificationExample = `
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

# Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train classifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# Make predictions
y_pred = clf.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.2f}')
print(classification_report(y_test, y_pred))
`;

// Sample data for visualization
const regressionData = [
    { x: 1, actual: 4.2, predicted: 4.0 },
    { x: 2, actual: 6.8, predicted: 6.5 },
    { x: 3, actual: 9.1, predicted: 9.0 },
    { x: 4, actual: 11.5, predicted: 11.5 },
    { x: 5, actual: 14.2, predicted: 14.0 },
    { x: 6, actual: 16.8, predicted: 16.5 },
    { x: 7, actual: 19.1, predicted: 19.0 },
    { x: 8, actual: 21.5, predicted: 21.5 },
    { x: 9, actual: 24.2, predicted: 24.0 },
    { x: 10, actual: 26.8, predicted: 26.5 }
];

export default function SciKitLearnDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">DATA ANALYTICS FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                SciKit-learn - Machine Learning Library
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Machine learning library with tools for classification, regression, clustering, and more
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:chart-scatter-plot" className="w-70 h-70 text-[#F7931E]"/>
            </div>

            <h2 id="what-is-sklearn" className="text-2xl font-semibold mt-12 mb-4">
                What is SciKit-learn?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                SciKit-learn (sklearn) is a free machine learning library for Python. It provides simple and efficient 
                tools for data mining and data analysis. It's built on NumPy, SciPy, and Matplotlib.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                SciKit-learn includes algorithms for classification, regression, clustering, dimensionality reduction, 
                model selection, and preprocessing. It's the go-to library for traditional machine learning tasks.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Use SciKit-learn?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Easy to Use:</strong> Simple and consistent API</li>
                            <li>• <strong>Comprehensive:</strong> Many algorithms for different tasks</li>
                            <li>• <strong>Well Documented:</strong> Excellent documentation and examples</li>
                            <li>• <strong>Production Ready:</strong> Used in many production systems</li>
                            <li>• <strong>Active Community:</strong> Large community and regular updates</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Install SciKit-learn:
            </p>

            <div className="mb-6">
                <CodeBlock code={sklearnSetup} language="bash" />
            </div>

            <h2 id="linear-regression" className="text-2xl font-semibold mt-12 mb-4">
                Linear Regression
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Linear regression is one of the most fundamental machine learning algorithms. It models the relationship 
                between a dependent variable and one or more independent variables using a linear equation:
            </p>

            <div className="mb-6">
                <CodeBlock code={linearRegressionExample} language="python" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Here's a visualization of linear regression predictions vs actual values:
            </p>

            <div className="mb-8 bg-white p-6 rounded-lg border border-[#f0f0f0]">
                <h3 className="font-semibold mb-4">Linear Regression: Actual vs Predicted</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={regressionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="x" label={{ value: 'X', position: 'insideBottom', offset: -5 }} />
                        <YAxis label={{ value: 'y', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="actual" stroke="#8884d8" strokeWidth={2} name="Actual" dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="predicted" stroke="#82ca9d" strokeWidth={2} name="Predicted" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <h2 id="other-algorithms" className="text-2xl font-semibold mt-12 mb-4">
                Other Algorithms
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                SciKit-learn provides many other algorithms. Here's an example of classification:
            </p>

            <div className="mb-6">
                <CodeBlock code={classificationExample} language="python" />
            </div>

            <div className="space-y-4 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Classification</h3>
                    <p className="text-[#4B5563]">
                        Algorithms: Logistic Regression, SVM, Random Forest, Decision Trees, K-Nearest Neighbors, Naive Bayes
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Regression</h3>
                    <p className="text-[#4B5563]">
                        Algorithms: Linear Regression, Ridge, Lasso, Polynomial Regression, Support Vector Regression
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">Clustering</h3>
                    <p className="text-[#4B5563]">
                        Algorithms: K-Means, DBSCAN, Hierarchical Clustering, Gaussian Mixture Models
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
                        <h3 className="font-semibold text-lg mb-2">Always Split Your Data</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">train_test_split</code> 
                            to separate training and testing data. Never evaluate on training data.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Preprocess Your Data</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">StandardScaler</code> 
                            or <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">MinMaxScaler</code> 
                            to normalize features. Use <button onClick={() => navigate("/alldocs/dataanalytics/pandas")} className="text-[#554DE2] hover:underline">Pandas</button> for data cleaning first.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Cross-Validation</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">cross_val_score</code> 
                            for more robust model evaluation, especially with small datasets.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Visualize Results</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use <button onClick={() => navigate("/alldocs/dataanalytics/matplotlib")} className="text-[#554DE2] hover:underline">Matplotlib</button> to visualize 
                            model performance, feature importance, and predictions. Visualization helps understand your models.
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
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/pandas")} className="text-[#554DE2] hover:underline">Data Processing with Pandas</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/matplotlib")} className="text-[#554DE2] hover:underline">Visualization with Matplotlib</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/dataanalytics/pytorch")} className="text-[#554DE2] hover:underline">Deep Learning with PyTorch</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/dataanalytics/pytorch")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/dataanalytics/pandas")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:panda" width="40" height="40" className="text-[#150458]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Libraries - Pandas</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

