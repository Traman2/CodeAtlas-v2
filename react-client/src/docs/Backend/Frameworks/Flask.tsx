import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-flask", title: "What is Flask?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "routing", title: "Routing" },
    { id: "templates", title: "Templates" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'backend-flask',
    title: 'Flask - Lightweight Python Framework',
    category: 'BACKEND',
    path: '/alldocs/backend/flask',
    keywords: ['flask', 'python', 'web framework', 'microframework', 'lightweight', 'minimal'],
    description: 'Complete guide to Flask for building lightweight web applications and APIs with Python.',
    searchableContent: `
        Flask Python web framework
        Lightweight microframework
        Minimal flexible
    `.trim()
};

const flaskSetup = `
# Create virtual environment
python -m venv venv
source venv/bin/activate  # or venv\\Scripts\\activate on Windows

# Install Flask
pip install flask

# Run application
python app.py
`;

const basicExample = `
# app.py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return {'message': 'Hello, Flask!'}

@app.route('/users/<int:user_id>')
def get_user(user_id):
    return {'user_id': user_id, 'name': 'John Doe'}

if __name__ == '__main__':
    app.run(debug=True)
`;

const routingExample = `
from flask import Flask, request, jsonify

app = Flask(__name__)

# GET request
@app.route('/items', methods=['GET'])
def get_items():
    return jsonify({'items': []})

# POST request
@app.route('/items', methods=['POST'])
def create_item():
    data = request.get_json()
    return jsonify({'message': 'Item created', 'item': data}), 201

# PUT request
@app.route('/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    data = request.get_json()
    return jsonify({'message': 'Item updated', 'item_id': item_id, 'data': data})

# DELETE request
@app.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    return jsonify({'message': 'Item deleted', 'item_id': item_id}), 200
`;

const templatesExample = `
# app.py
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', title='Home')

@app.route('/user/<name>')
def user(name):
    return render_template('user.html', name=name)

# templates/index.html
# <!DOCTYPE html>
# <html>
# <head><title>{{ title }}</title></head>
# <body><h1>Welcome to Flask!</h1></body>
# </html>
`;

export default function FlaskDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">BACKEND FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Flask - Lightweight Python Framework
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                A micro web framework written in Python. Simple, flexible, and gives you control over your application structure
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:language-python" className="w-70 h-70 text-[#3776AB]"/>
            </div>

            <h2 id="what-is-flask" className="text-2xl font-semibold mt-12 mb-4">
                What is Flask?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Flask is a lightweight WSGI web application framework. It's designed to make getting started quick and 
                easy, with the ability to scale up to complex applications. Flask is called a "microframework" because it 
                doesn't require particular tools or libraries.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Unlike Django, Flask gives you flexibility and control. You choose what libraries to use, how to structure 
                your application, and what features to include. This makes Flask perfect for small to medium applications 
                and APIs.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Use Flask?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Simple:</strong> Minimal and easy to learn</li>
                            <li>• <strong>Flexible:</strong> Choose your own libraries and structure</li>
                            <li>• <strong>Lightweight:</strong> Small codebase, fast startup</li>
                            <li>• <strong>Great for APIs:</strong> Perfect for building REST APIs</li>
                            <li>• <strong>Extensible:</strong> Large ecosystem of extensions</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Set up a new Flask project:
            </p>

            <div className="mb-6">
                <CodeBlock code={flaskSetup} language="bash" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Create your first Flask application:
            </p>

            <div className="mb-6">
                <CodeBlock code={basicExample} language="python" />
            </div>

            <h2 id="routing" className="text-2xl font-semibold mt-12 mb-4">
                Routing
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Define routes with different HTTP methods:
            </p>

            <div className="mb-6">
                <CodeBlock code={routingExample} language="python" />
            </div>

            <h2 id="templates" className="text-2xl font-semibold mt-12 mb-4">
                Templates
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Flask uses Jinja2 for templating. Create templates in a <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">templates</code> folder:
            </p>

            <div className="mb-6">
                <CodeBlock code={templatesExample} language="python" />
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
                        <h3 className="font-semibold text-lg mb-2">Use Blueprints</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Organize your application using Blueprints to modularize routes and keep code organized.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Use Flask-RESTful for APIs</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            For building REST APIs, consider Flask-RESTful which provides a simple framework for building 
                            REST APIs.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Environment Variables</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">python-decouple</code> 
                            for managing configuration and secrets.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Deploy to Cloud</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Deploy Flask applications to cloud platforms. See our <button onClick={() => navigate("/alldocs/deployment/overview")} className="text-[#554DE2] hover:underline">Deployment guide</button>.
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
                            <li>• <button onClick={() => navigate("/alldocs/backend/comparison")} className="text-[#554DE2] hover:underline">Compare Backend Frameworks</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/deployment/overview")} className="text-[#554DE2] hover:underline">Deploy Flask Applications</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/backend/django")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/backend/springboot")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:language-java" width="40" height="40" className="text-[#ED8B00]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Frameworks - Spring Boot</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

