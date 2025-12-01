import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-angular", title: "What is Angular?" },
    { id: "getting-started", title: "Getting Started" },
    { id: "your-first-component", title: "Your First Component" },
    { id: "typescript", title: "TypeScript Integration" },
    { id: "dependency-injection", title: "Dependency Injection" },
    { id: "modules", title: "Modules & Architecture" },
    { id: "templates", title: "Templates & Directives" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'webdev-angular',
    title: 'Angular Guide',
    category: 'WEBDEV',
    path: '/alldocs/webdev/angular',
    keywords: ['angular', 'typescript', 'dependency injection', 'modules', 'components', 'directives', 'getting started'],
    description: 'Complete guide to Angular including getting started, TypeScript, dependency injection, modules, and best practices.',
    searchableContent: `
        Angular Guide
        Learn Angular from scratch
        Getting started with Angular
        TypeScript
        Dependency Injection
        Modules
        Templates and Directives
    `.trim()
};

const installAngular = `
# Install Angular CLI globally
npm install -g @angular/cli

# Create a new Angular project
ng new my-angular-app

# Navigate to the project directory
cd my-angular-app

# Start the development server
ng serve

# Open http://localhost:4200 in your browser
`;

const firstComponent = `
// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
`;

const componentTemplate = `
<!-- src/app/app.component.html -->
<div class="app">
  <h1>{{ title }}</h1>
  <p>Count: {{ count }}</p>
  <button (click)="increment()">Increment</button>
  <button (click)="decrement()">Decrement</button>
</div>
`;

const typescriptExample = `
// src/app/user.service.ts
import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}

// src/app/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
`;

const dependencyInjection = `
// src/app/logger.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: string): void {
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }

  error(message: string): void {
    console.error(\`[\${new Date().toISOString()}] ERROR: \${message}\`);
  }
}

// src/app/todo.component.ts
import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  todos: string[] = [];

  // Dependency injection via constructor
  constructor(private logger: LoggerService) {}

  addTodo(todo: string): void {
    this.todos.push(todo);
    this.logger.log(\`Added todo: \${todo}\`);
  }

  removeTodo(index: number): void {
    const removed = this.todos.splice(index, 1)[0];
    this.logger.log(\`Removed todo: \${removed}\`);
  }
}
`;

const modulesExample = `
// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

const templatesDirectives = `
<!-- src/app/todo.component.html -->
<div class="todo-container">
  <h2>Todo List</h2>
  
  <!-- Property Binding -->
  <input [value]="newTodo" (input)="newTodo = $event.target.value" />
  
  <!-- Event Binding -->
  <button (click)="addTodo(newTodo)">Add Todo</button>
  
  <!-- Two-way Binding with ngModel -->
  <input [(ngModel)]="newTodo" placeholder="Enter todo" />
  
  <!-- *ngIf for conditional rendering -->
  <div *ngIf="todos.length === 0">
    <p>No todos yet. Add one above!</p>
  </div>
  
  <!-- *ngFor for list rendering -->
  <ul>
    <li *ngFor="let todo of todos; let i = index">
      {{ todo }}
      <button (click)="removeTodo(i)">Remove</button>
    </li>
  </ul>
  
  <!-- [ngClass] for dynamic classes -->
  <div [ngClass]="{'completed': isCompleted, 'pending': !isCompleted}">
    Task status
  </div>
  
  <!-- [ngStyle] for dynamic styles -->
  <div [ngStyle]="{'color': textColor, 'font-size': fontSize}">
    Styled text
  </div>
  
  <!-- *ngSwitch for multiple conditions -->
  <div [ngSwitch]="status">
    <p *ngSwitchCase="'loading'">Loading...</p>
    <p *ngSwitchCase="'success'">Success!</p>
    <p *ngSwitchCase="'error'">Error occurred</p>
    <p *ngSwitchDefault>Unknown status</p>
  </div>
</div>
`;

const standaloneComponent = `
// Angular 14+ Standalone Components (no module needed)
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: \`
    <div>
      <h1>{{ title }}</h1>
      <input [(ngModel)]="inputValue" />
      <p>You typed: {{ inputValue }}</p>
    </div>
  \`
})
export class StandaloneComponent {
  title = 'Standalone Component';
  inputValue = '';
}
`;

export default function AngularDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">FRAMEWORKS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                Angular
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                A platform and framework for building single-page client applications using HTML and TypeScript.
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:angular" className="w-70 h-70 text-[#DD0031]"/>
            </div>

            <h2 id="what-is-angular" className="text-2xl font-semibold mt-12 mb-4">
                What is Angular?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Angular is a comprehensive platform and framework for building single-page applications (SPAs) developed
                by Google. First released in 2016 (Angular 2+), it's a complete rewrite of AngularJS with a focus on
                TypeScript, modularity, and enterprise-scale applications.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                Angular is opinionated and provides a complete solution out of the box, including routing, HTTP client,
                forms handling, and more. It uses a component-based architecture with dependency injection, making it
                ideal for large teams and complex applications.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>TypeScript First:</strong> Built with TypeScript for type safety</li>
                            <li>• <strong>Dependency Injection:</strong> Built-in DI system for better testability</li>
                            <li>• <strong>Modular Architecture:</strong> Organized with modules and components</li>
                            <li>• <strong>Complete Solution:</strong> Routing, HTTP, forms, and more included</li>
                            <li>• <strong>Enterprise Ready:</strong> Designed for large-scale applications</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="getting-started" className="text-2xl font-semibold mt-12 mb-4">
                Getting Started
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Angular uses the Angular CLI (Command Line Interface) for creating and managing projects. The CLI
                handles scaffolding, building, testing, and deployment.
            </p>

            <div className="mb-6">
                <CodeBlock code={installAngular} language="bash" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                After running <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">ng serve</code>,
                open your browser to <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">http://localhost:4200</code>.
                You'll see your Angular app running with live reload enabled.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Prerequisites</h3>
                        <p className="text-[#4B5563] leading-relaxed">
                            Before starting with Angular, you should know:
                        </p>
                        <ul className="mt-2 space-y-1 text-[#4B5563]">
                            <li>• HTML, CSS, and JavaScript</li>
                            <li>• TypeScript (Angular is built with TypeScript)</li>
                            <li>• Basic understanding of classes, decorators, and modules</li>
                            <li>• Familiarity with command-line tools</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="your-first-component" className="text-2xl font-semibold mt-12 mb-4">
                Your First Component
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Angular components are the building blocks of Angular applications. Each component consists of a
                TypeScript class (the component logic), an HTML template (the view), and CSS styles.
            </p>

            <div className="mb-6">
                <CodeBlock code={firstComponent} language="typescript" />
            </div>

            <div className="mb-6">
                <CodeBlock code={componentTemplate} language="html" />
            </div>

            <p className="mt-4 mb-6 leading-relaxed">
                The <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">@Component</code> decorator
                tells Angular that this class is a component. The <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">selector</code>
                defines how you use the component in templates, and <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">templateUrl</code>
                points to the HTML template file.
            </p>

            <h2 id="typescript" className="text-2xl font-semibold mt-12 mb-4">
                TypeScript Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Angular is built with TypeScript, which provides static typing, interfaces, classes, and decorators.
                This makes Angular applications more maintainable and less error-prone, especially in large codebases.
            </p>

            <div className="mb-6">
                <CodeBlock code={typescriptExample} language="typescript" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">TypeScript Benefits in Angular</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• <strong>Type Safety:</strong> Catch errors at compile time, not runtime</li>
                    <li>• <strong>Better IDE Support:</strong> Autocomplete, refactoring, and navigation</li>
                    <li>• <strong>Interfaces:</strong> Define contracts for data structures</li>
                    <li>• <strong>Decorators:</strong> Used for components, services, and more</li>
                    <li>• <strong>Modern JavaScript:</strong> ES6+ features with type checking</li>
                </ul>
            </div>

            <h2 id="dependency-injection" className="text-2xl font-semibold mt-12 mb-4">
                Dependency Injection
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Dependency Injection (DI) is a core Angular feature that makes components more modular, testable, and
                maintainable. Instead of creating dependencies inside a component, Angular injects them through the
                constructor.
            </p>

            <div className="mb-6">
                <CodeBlock code={dependencyInjection} language="typescript" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:lightbulb-on" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Why Dependency Injection?</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>Testability:</strong> Easy to mock dependencies in tests</li>
                            <li>• <strong>Modularity:</strong> Components don't need to know how to create dependencies</li>
                            <li>• <strong>Reusability:</strong> Services can be shared across components</li>
                            <li>• <strong>Maintainability:</strong> Changes to services don't require changing components</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="modules" className="text-2xl font-semibold mt-12 mb-4">
                Modules & Architecture
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Angular applications are organized into modules. A module is a container for related components, services,
                directives, and pipes. The root module is <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">AppModule</code>.
            </p>

            <div className="mb-6">
                <CodeBlock code={modulesExample} language="typescript" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:package-variant" width="20" height="20" className="text-[#DD0031]" />
                        declarations
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        Components, directives, and pipes that belong to this module.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:import" width="20" height="20" className="text-[#DD0031]" />
                        imports
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        Other modules whose exported classes are needed in this module.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:toolbox" width="20" height="20" className="text-[#DD0031]" />
                        providers
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        Services available to components in this module.
                    </p>
                </div>

                <div className="px-5 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon icon="mdi:rocket-launch" width="20" height="20" className="text-[#DD0031]" />
                        bootstrap
                    </h4>
                    <p className="text-sm text-[#4B5563]">
                        The root component that Angular creates and inserts into the DOM.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">💡 Standalone Components (Angular 14+)</h3>
                <p className="text-[#4B5563] leading-relaxed mb-3">
                    Angular 14+ introduced standalone components that don't require a module. This is the future direction
                    of Angular and simplifies the architecture.
                </p>
                <div className="mb-3">
                    <CodeBlock code={standaloneComponent} language="typescript" />
                </div>
            </div>

            <h2 id="templates" className="text-2xl font-semibold mt-12 mb-4">
                Templates & Directives
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Angular templates use HTML with Angular-specific syntax. Directives (prefixed with <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">*</code> or <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">ng</code>)
                extend HTML with dynamic behavior.
            </p>

            <div className="mb-6">
                <CodeBlock code={templatesDirectives} language="html" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Common Directives</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-[#4B5563]">
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">*ngIf</code> - Conditional rendering</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">*ngFor</code> - List rendering</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">*ngSwitch</code> - Multiple conditions</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">[ngClass]</code> - Dynamic classes</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">[ngStyle]</code> - Dynamic styles</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">[(ngModel)]</code> - Two-way binding</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">[property]</code> - Property binding</div>
                    <div><code className="px-1 py-0.5 bg-gray-200 rounded font-mono">(event)</code> - Event binding</div>
                </div>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Use Services for Business Logic</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Keep components focused on presentation. Move business logic, API calls, and data manipulation
                        to services that can be injected into components.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Use OnPush Change Detection</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Set <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">changeDetection: ChangeDetectionStrategy.OnPush</code>
                        in components to improve performance by only checking for changes when inputs change.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Use TrackBy with *ngFor</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Provide a <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">trackBy</code> function
                        when using <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">*ngFor</code> to help
                        Angular track items efficiently and improve performance.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. Lazy Load Modules</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use lazy loading for feature modules to reduce initial bundle size. Load modules only when
                        users navigate to routes that need them.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">5. Use Reactive Forms for Complex Forms</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        For complex forms with validation, use Reactive Forms instead of Template-Driven Forms. They
                        provide better type safety and are easier to test.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Next Steps</h3>
                <p className="text-[#4B5563] leading-relaxed mb-3">
                    Now that you understand Angular basics, here's what to learn next:
                </p>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Angular Router for navigation</li>
                    <li>• Reactive Forms for form handling</li>
                    <li>• HTTP Client for API calls</li>
                    <li>• RxJS Observables for async operations</li>
                    <li>• Testing with Jasmine and Karma</li>
                </ul>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/webdev/vue")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Right button next */}
                <button
                    onClick={() => navigate("/alldocs/webdev/tailwind")}
                    className="w-full px-6 py-4 bg-white text-gray-700 border border-gray-300 hover:border-[#554DE2] hover:bg-[#554DE2]/5 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <Icon icon="mdi:tailwind" width="40" height="40" className="text-[#06B6D4]" />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold text-lg text-left">Next Section</h3>
                            <p className="text-[#6b7280] text-left">Tools - Tailwind CSS</p>
                        </div>
                    </div>
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="text-[#554DE2] group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

