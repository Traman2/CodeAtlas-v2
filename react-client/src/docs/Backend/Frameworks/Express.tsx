import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import { useNavigate } from "react-router-dom";
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-express", title: "What is Express?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "routing", title: "Routing" },
    { id: "middleware", title: "Middleware" },
    { id: "database-integration", title: "Database Integration" },
    { id: "authentication", title: "Authentication" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'backend-express',
    title: 'Express.js - Node.js Web Framework',
    category: 'BACKEND',
    path: '/alldocs/backend/express',
    keywords: ['express', 'expressjs', 'nodejs', 'node', 'backend', 'api', 'rest', 'server', 'javascript'],
    description: 'Complete guide to Express.js for building REST APIs and web applications with Node.js.',
    searchableContent: `
        Express.js Node.js web framework
        REST API backend server
        Middleware routing
    `.trim()
};

const expressSetup = `
# Create a new Node.js project
mkdir my-express-app
cd my-express-app
npm init -y

# Install Express
npm install express

# Install development dependencies
npm install --save-dev nodemon
`;

const basicServer = `
// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, Express!' });
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});
`;

const routingExample = `
// routes/users.js
const express = require('express');
const router = express.Router();

// GET /users
router.get('/', (req, res) => {
  res.json({ users: [] });
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ user: { id, name: 'John Doe' } });
});

// POST /users
router.post('/', (req, res) => {
  const { name, email } = req.body;
  res.json({ message: 'User created', user: { name, email } });
});

// PUT /users/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.json({ message: 'User updated', user: { id, name, email } });
});

// DELETE /users/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'User deleted', id });
});

module.exports = router;

// app.js
const express = require('express');
const userRoutes = require('./routes/users');
const app = express();

app.use(express.json());
app.use('/users', userRoutes);

app.listen(3000);
`;

const middlewareExample = `
// Custom middleware
const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.path} - \${new Date().toISOString()}\`);
  next(); // Call next to continue to the next middleware
};

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
};

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // Verify token here
  next();
};

// Apply middleware
app.use(logger);
app.use('/api/protected', authenticate);
app.use(errorHandler);
`;

const databaseExample = `
// Using MongoDB with Mongoose
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Create user
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
`;

const authExample = `
// Using JWT for authentication
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Find user (pseudo-code)
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // Verify password
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // Generate JWT token
  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  
  res.json({ token, user: { id: user._id, email: user.email } });
});

// Protected route middleware
const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Use protected route
app.get('/profile', requireAuth, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user);
});
`;

export default function ExpressDocs() {
    const navigate = useNavigate();

    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">BACKEND FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Express.js - Node.js Web Framework
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Fast, unopinionated, minimalist web framework for Node.js. Build REST APIs and web applications with ease.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:nodejs" className="w-70 h-70 text-[#339933]"/>
            </div>

            <h2 id="what-is-express" className="text-2xl font-semibold mt-12 mb-4">
                What is Express?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Express is a minimal and flexible Node.js web application framework that provides a robust set of features 
                for building web and mobile applications. It's the most popular Node.js framework and is used by many 
                companies including IBM, Uber, and Accenture.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Express simplifies the process of building web servers and APIs. It provides a thin layer of fundamental 
                web application features, without obscuring Node.js features that you know and love.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Use Express?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Minimal:</strong> Lightweight and unopinionated, giving you flexibility</li>
                            <li>• <strong>Fast:</strong> High performance for building APIs and web applications</li>
                            <li>• <strong>Large Ecosystem:</strong> Huge community and extensive middleware options</li>
                            <li>• <strong>JavaScript Everywhere:</strong> Use the same language for frontend and backend</li>
                            <li>• <strong>Easy to Learn:</strong> Simple API that's easy to get started with</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Set up a new Express project:
            </p>

            <div className="mb-6">
                <CodeBlock code={expressSetup} language="bash" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Create your first Express server:
            </p>

            <div className="mb-6">
                <CodeBlock code={basicServer} language="javascript" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                Run the server with <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">node server.js</code> 
                or use nodemon for auto-restart during development: <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">npx nodemon server.js</code>
            </p>

            <h2 id="routing" className="text-2xl font-semibold mt-12 mb-4">
                Routing
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Express routing allows you to define how your application responds to client requests. You can organize 
                routes in separate files for better code organization:
            </p>

            <div className="mb-6">
                <CodeBlock code={routingExample} language="javascript" />
            </div>

            <h2 id="middleware" className="text-2xl font-semibold mt-12 mb-4">
                Middleware
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Middleware functions have access to the request object, response object, and the next middleware function. 
                They can execute code, make changes to the request/response, end the request-response cycle, or call the 
                next middleware:
            </p>

            <div className="mb-6">
                <CodeBlock code={middlewareExample} language="javascript" />
            </div>

            <h2 id="database-integration" className="text-2xl font-semibold mt-12 mb-4">
                Database Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Express works with any database. Here's an example using MongoDB with Mongoose:
            </p>

            <div className="mb-6">
                <CodeBlock code={databaseExample} language="javascript" />
            </div>

            <h2 id="authentication" className="text-2xl font-semibold mt-12 mb-4">
                Authentication
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Implement authentication using JWT (JSON Web Tokens) and bcrypt for password hashing:
            </p>

            <div className="mb-6">
                <CodeBlock code={authExample} language="javascript" />
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
                        <h3 className="font-semibold text-lg mb-2">Use Environment Variables</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Store sensitive information like API keys, database URLs, and secrets in environment variables. 
                            Use the <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">dotenv</code> package.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        2
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Organize Routes</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Separate routes into different files and use Express Router. This keeps your code organized 
                            and maintainable.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        3
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Error Handling</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Always implement proper error handling middleware. Use try-catch blocks for async operations 
                            and return appropriate HTTP status codes.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        4
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Security</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">helmet</code> for 
                            security headers, validate input, sanitize user data, and use HTTPS in production.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
                        5
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Deployment</h3>
                        <p className="text-[#6b7280] leading-relaxed">
                            Deploy to cloud platforms like AWS, Azure, or GCP. See our <button onClick={() => navigate("/alldocs/deployment/overview")} className="text-[#554DE2] hover:underline">Deployment guide</button> for more. 
                            Use process managers like PM2 for production.
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
                            <li>• <button onClick={() => navigate("/alldocs/deployment/overview")} className="text-[#554DE2] hover:underline">Deploy Express Applications</button></li>
                            <li>• <button onClick={() => navigate("/alldocs/cloud/aws")} className="text-[#554DE2] hover:underline">Deploy to AWS</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/backend/comparison")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/backend/fastapi")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:language-python" width="40" height="40" className="text-[#3776AB]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Frameworks - FastAPI</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

