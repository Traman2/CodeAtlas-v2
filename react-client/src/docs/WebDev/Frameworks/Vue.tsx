import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-vue", title: "What is Vue?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "your-first-component", title: "Your First Component" },
    { id: "template-syntax", title: "Template Syntax" },
    { id: "reactivity", title: "Reactivity System" },
    { id: "composition-api", title: "Composition API" },
    { id: "directives", title: "Directives" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'webdev-vue',
    title: 'Vue.js Guide',
    category: 'WEBDEV',
    path: '/alldocs/webdev/vue',
    keywords: ['vue', 'vuejs', 'javascript', 'template syntax', 'reactivity', 'composition api', 'directives', 'getting started'],
    description: 'Complete guide to Vue.js including getting started, template syntax, reactivity system, Composition API, and best practices.',
    searchableContent: `
        Vue.js Guide
        Learn Vue.js from scratch
        Getting started with Vue
        Template syntax
        Reactivity system
        Composition API
        Directives
    `.trim()
};

const installVue = `
# Create a new Vue project with Vite (recommended)
npm create vite@latest my-vue-app -- --template vue

# Navigate to the project directory
cd my-vue-app

# Install dependencies
npm install

# Start the development server
npm run dev
`;

const firstComponent = `
<!-- src/App.vue -->
<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello, Vue!')
const count = ref(0)

function increment() {
  count.value++
}
</script>

<style scoped>
.app {
  text-align: center;
  padding: 2rem;
}
</style>
`;

const templateSyntax = `
<template>
  <div>
    <!-- Text Interpolation -->
    <p>{{ message }}</p>
    
    <!-- Attribute Binding -->
    <div :id="dynamicId">Dynamic ID</div>
    <button :disabled="isDisabled">Click me</button>
    
    <!-- Event Handling -->
    <button @click="handleClick">Click</button>
    <input @input="handleInput" />
    
    <!-- Conditional Rendering -->
    <p v-if="showMessage">This is shown conditionally</p>
    <p v-else>This is the alternative</p>
    
    <!-- List Rendering -->
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    
    <!-- Two-way Binding -->
    <input v-model="userInput" />
    <p>You typed: {{ userInput }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')
const dynamicId = ref('my-id')
const isDisabled = ref(false)
const showMessage = ref(true)
const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
])
const userInput = ref('')

function handleClick() {
  console.log('Button clicked!')
}

function handleInput(event) {
  console.log('Input:', event.target.value)
}
</script>
`;

const reactivityExample = `
<script setup>
import { ref, reactive, computed, watch } from 'vue'

// ref() for primitive values
const count = ref(0)
count.value++ // Access with .value in script

// reactive() for objects
const state = reactive({
  name: 'Vue',
  version: '3.4'
})

// computed() for derived state
const doubleCount = computed(() => count.value * 2)

// watch() for side effects
watch(count, (newValue, oldValue) => {
  console.log(\`Count changed from \${oldValue} to \${newValue}\`)
})

// In template, no .value needed
// <p>{{ count }}</p> ✅
// <p>{{ state.name }}</p> ✅
</script>
`;

const compositionApi = `
<script setup>
import { ref, computed, onMounted } from 'vue'

// State
const todos = ref([])
const newTodo = ref('')

// Computed property
const completedTodos = computed(() => {
  return todos.value.filter(todo => todo.completed)
})

// Methods
function addTodo() {
  if (newTodo.value.trim()) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value,
      completed: false
    })
    newTodo.value = ''
  }
}

function toggleTodo(id) {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

// Lifecycle hook
onMounted(() => {
  console.log('Component mounted!')
})
</script>

<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" />
    <button @click="addTodo">Add Todo</button>
    
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input 
          type="checkbox" 
          :checked="todo.completed"
          @change="toggleTodo(todo.id)"
        />
        {{ todo.text }}
      </li>
    </ul>
    
    <p>Completed: {{ completedTodos.length }}</p>
  </div>
</template>
`;

const directivesExample = `
<template>
  <div>
    <!-- v-if / v-else-if / v-else -->
    <p v-if="type === 'A'">Type A</p>
    <p v-else-if="type === 'B'">Type B</p>
    <p v-else>Other type</p>
    
    <!-- v-show (toggles display, doesn't remove from DOM) -->
    <div v-show="isVisible">This can be hidden</div>
    
    <!-- v-for with key -->
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
    
    <!-- v-bind (shorthand: :) -->
    <img :src="imageSrc" :alt="imageAlt" />
    
    <!-- v-on (shorthand: @) -->
    <button @click="handleClick" @mouseenter="handleMouseEnter">
      Click me
    </button>
    
    <!-- v-model (two-way binding) -->
    <input v-model="inputValue" />
    <textarea v-model="textValue"></textarea>
    <select v-model="selectedValue">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    
    <!-- v-html (use with caution!) -->
    <div v-html="htmlContent"></div>
    
    <!-- v-once (render once, never update) -->
    <span v-once>{{ message }}</span>
  </div>
</template>
`;

export default function VueDocs() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Vue.js
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                A progressive JavaScript framework for building user interfaces. Learn how to create interactive UIs with Vue.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:vuejs" className="w-70 h-70 text-[#4FC08D]"/>
            </div>

            <h2 id="what-is-vue" className="text-2xl font-semibold mt-12 mb-4">
                What is Vue?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Vue.js (pronounced "view") is a progressive JavaScript framework created by Evan You in 2014. It's designed
                to be incrementally adoptable—you can use as much or as little of Vue as you need. Vue is known for its
                gentle learning curve, excellent documentation, and developer-friendly experience.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Vue combines the best ideas from React and Angular, offering a template-based syntax that's easy to learn
                while providing powerful features like reactivity, component composition, and a robust ecosystem.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Progressive:</strong> Start small and scale up as needed</li>
                            <li>• <strong>Reactive:</strong> Automatic dependency tracking and efficient updates</li>
                            <li>• <strong>Template-Based:</strong> Intuitive HTML-like syntax</li>
                            <li>• <strong>Component-Based:</strong> Build reusable, composable components</li>
                            <li>• <strong>Excellent DX:</strong> Great tooling and developer experience</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Vue 3 uses Vite as the recommended build tool for fast development and optimized production builds.
                Here's how to create your first Vue project:
            </p>

            <div className="mb-6">
                <CodeBlock code={installVue} language="bash" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                After running <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">npm run dev</code>,
                open your browser to the URL shown in the terminal. You'll see your Vue app running with hot module
                replacement (HMR) enabled, so changes appear instantly!
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Prerequisites</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            Before starting with Vue, you should know:
                        </p>
                        <ul className="mt-2 space-y-1 text-[#4B5563]">
                            <li>• HTML, CSS, and JavaScript basics</li>
                            <li>• ES6+ JavaScript features (arrow functions, destructuring, modules)</li>
                            <li>• Basic understanding of the DOM</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="your-first-component" className="text-2xl font-semibold mt-12 mb-4">
                Your First Component
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Vue uses Single File Components (SFCs) with <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">.vue</code> files.
                Each component has three sections: template (HTML), script (JavaScript), and style (CSS).
            </p>

            <div className="mb-6">
                <CodeBlock code={firstComponent} language="vue" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                This component demonstrates Vue's reactivity system. When you click the button, <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">count</code>
                automatically updates, and Vue re-renders the template to show the new value. Notice how you use
                <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">.value</code> in the script but not in the template!
            </p>

            <h2 id="template-syntax" className="text-2xl font-semibold mt-12 mb-4">
                Template Syntax
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Vue's template syntax is intuitive and HTML-like. It uses double curly braces for text interpolation
                and special directives (prefixed with <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">v-</code>) for dynamic behavior.
            </p>

            <div className="mb-6">
                <CodeBlock code={templateSyntax} language="vue" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Template Syntax Cheat Sheet</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">{'{{ }}'}</code> - Text interpolation</li>
                    <li>• <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">v-bind:</code> or <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">:</code> - Attribute binding</li>
                    <li>• <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">v-on:</code> or <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">@</code> - Event handling</li>
                    <li>• <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">v-if</code> - Conditional rendering</li>
                    <li>• <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">v-for</code> - List rendering</li>
                    <li>• <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">v-model</code> - Two-way data binding</li>
                </ul>
            </div>

            <h2 id="reactivity" className="text-2xl font-semibold mt-12 mb-4">
                Reactivity System
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Vue's reactivity system is one of its most powerful features. When you change reactive data, Vue
                automatically updates the DOM. Vue 3 uses JavaScript Proxies to track dependencies and trigger updates.
            </p>

            <div className="mb-6">
                <CodeBlock code={reactivityExample} language="js" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:atom-variant" width="20" height="20" className="text-[#4FC08D]" />
                        ref()
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        Use for primitive values (string, number, boolean). Access with <code className="px-1 py-0.5 bg-gray-200 rounded text-xs font-mono">.value</code> in script.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:atom-variant" width="20" height="20" className="text-[#4FC08D]" />
                        reactive()
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        Use for objects and arrays. No <code className="px-1 py-0.5 bg-gray-200 rounded text-xs font-mono">.value</code> needed.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:calculator" width="20" height="20" className="text-[#4FC08D]" />
                        computed()
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        Creates cached computed properties that only recalculate when dependencies change.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:eye" width="20" height="20" className="text-[#4FC08D]" />
                        watch()
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        Watches reactive data and runs side effects when values change.
                    </p>
                </div>
            </div>

            <h2 id="composition-api" className="text-2xl font-semibold mt-12 mb-4">
                Composition API
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                The Composition API (introduced in Vue 3) provides a more flexible way to organize component logic.
                It's especially useful for complex components and code reuse. The <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">&lt;script setup&gt;</code>
                syntax makes it even more concise.
            </p>

            <div className="mb-6">
                <CodeBlock code={compositionApi} language="vue" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Composition API Benefits</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• <strong>Better TypeScript Support:</strong> Easier to type with TypeScript</li>
                    <li>• <strong>Code Organization:</strong> Group related logic together</li>
                    <li>• <strong>Reusability:</strong> Extract logic into composables (like React hooks)</li>
                    <li>• <strong>Performance:</strong> Better tree-shaking and smaller bundle size</li>
                </ul>
            </div>

            <h2 id="directives" className="text-2xl font-semibold mt-12 mb-4">
                Directives
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Directives are special attributes with the <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">v-</code> prefix that apply reactive
                behavior to the DOM. Vue provides many built-in directives, and you can create custom ones too.
            </p>

            <div className="mb-6">
                <CodeBlock code={directivesExample} language="vue" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Common Directives</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-[#4B5563]">
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">v-if</code> - Conditional rendering</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">v-show</code> - Toggle visibility</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">v-for</code> - List rendering</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">v-bind</code> - Attribute binding</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">v-on</code> - Event handling</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">v-model</code> - Two-way binding</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">v-html</code> - Raw HTML</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">v-once</code> - Render once</div>
                </div>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use Composition API for New Projects</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        The Composition API with <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">&lt;script setup&gt;</code> is the
                        recommended approach for Vue 3. It's more flexible and provides better TypeScript support.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Use Keys in v-for</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Always provide a unique <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">:key</code> when using <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">v-for</code>.
                        This helps Vue track elements efficiently.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Extract Reusable Logic into Composables</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Similar to React hooks, create composables (functions that use Composition API) for reusable
                        logic. This keeps components clean and logic testable.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. Use Scoped Styles</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Add <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">scoped</code> to your
                        <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">&lt;style&gt;</code> tag to prevent CSS from leaking to other components.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">5. Prefer v-if over v-show</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">v-if</code> for conditional rendering unless you need to toggle
                        visibility frequently (then use <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">v-show</code>). <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">v-if</code> removes elements from the DOM.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Next Steps</h3>
                <p className="text-[#4B5563] leading-relaxed mb-3">
                    Now that you understand Vue basics, here's what to learn next:
                </p>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Vue Router for navigation</li>
                    <li>• Pinia for state management</li>
                    <li>• Composables for reusable logic</li>
                    <li>• Vue DevTools for debugging</li>
                    <li>• Testing with Vitest</li>
                </ul>
            </div>
        </>
    )
}

