import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import CodeBlock from '../../../components/CodeBlock';
import type { GuideMetadata } from '../../../types/GuideMetadata';

export const sections = [
    { id: "what-is-shadcn", title: "What is shadcn/ui?" },
    { id: "react-integration", title: "React Integration" },
    { id: "vue-alternatives", title: "Vue Alternatives" },
    { id: "angular-alternatives", title: "Angular Alternatives" },
    { id: "customization", title: "Customization" },
    { id: "best-practices", title: "Best Practices" }
]

export const metadata: GuideMetadata = {
    id: 'webdev-tools-shadcn',
    title: 'shadcn/ui - UI Components',
    category: 'WEBDEV',
    path: '/alldocs/webdev/tools/shadcn',
    keywords: ['shadcn', 'ui components', 'radix ui', 'tailwind', 'react', 'vue', 'angular'],
    description: 'Learn how to use shadcn/ui and similar component libraries in React, Vue, and Angular applications.',
    searchableContent: `
        shadcn/ui UI Components
        React Vue Angular component libraries
    `.trim()
};

const shadcnInstall = `
# Initialize shadcn/ui in your React/Next.js project
npx shadcn-ui@latest init

# This will:
# 1. Install dependencies (class-variance-authority, clsx, tailwind-merge, etc.)
# 2. Create components.json config file
# 3. Set up the lib/utils.ts file

# Add components as needed
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
`;

const shadcnConfig = `
// components.json (auto-generated)
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
`;

const shadcnButton = `
// components/ui/button.tsx (auto-generated, you own this code!)
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
`;

const shadcnUsage = `
// Using shadcn components in your React app
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

function MyComponent() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>This is a shadcn card component</CardDescription>
        </CardHeader>
        <CardContent>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
              </DialogHeader>
              <p>Dialog content goes here</p>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  )
}
`;

const vuePrimeVue = `
# Install PrimeVue (Vue equivalent to shadcn)
npm install primevue primeicons
npm install -D @primevue/themes

# Or use PrimeFlex (utility-first CSS like Tailwind)
npm install primeflex
`;

const vuePrimeVueExample = `
<!-- Vue Component with PrimeVue -->
<template>
  <div>
    <Card>
      <template #title>Welcome</template>
      <template #content>
        <p>This is a PrimeVue card component</p>
        <Button label="Click Me" @click="handleClick" />
      </template>
    </Card>
    
    <Dialog v-model:visible="visible" modal header="Dialog Title">
      <p>Dialog content goes here</p>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const visible = ref(false)

function handleClick() {
  visible.value = true
}
</script>

<style>
@import 'primevue/resources/themes/lara-light-blue/theme.css';
@import 'primevue/resources/primevue.min.css';
</style>
`;

const vueRadixVue = `
# Install Radix Vue (Vue port of Radix UI primitives)
npm install @radix-vue/slot
npm install @radix-vue/dialog
npm install @radix-vue/button

# Then build your own components similar to shadcn
`;

const vueRadixVueExample = `
<!-- Custom component using Radix Vue primitives -->
<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger as-child>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>Dialog description</DialogDescription>
        <DialogClose>Close</DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup>
import { ref } from 'vue'
import { DialogRoot, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@radix-vue/dialog'
import Button from './Button.vue'

const open = ref(false)
</script>
`;

const angularPrimeNG = `
# Install PrimeNG (Angular equivalent to shadcn)
npm install primeng primeicons

# Import in your module
`;

const angularPrimeNGExample = `
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    DialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

const angularComponent = `
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`
    <p-card header="Welcome" subheader="This is a PrimeNG card">
      <p>Card content goes here</p>
      <p-button label="Click Me" (onClick)="showDialog()"></p-button>
    </p-card>
    
    <p-dialog [(visible)]="display" header="Dialog Title" [modal]="true">
      <p>Dialog content goes here</p>
    </p-dialog>
  \`
})
export class AppComponent {
  display: boolean = false;
  
  showDialog() {
    this.display = true;
  }
}
`;

const angularMaterial = `
# Install Angular Material (official Angular component library)
ng add @angular/material

# This will:
# 1. Install Angular Material and CDK
# 2. Add theme configuration
# 3. Set up animations
# 4. Add Material icons
`;

const angularMaterialExample = `
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

const customization = `
// Customizing shadcn components (you own the code!)
// components/ui/button.tsx

// Change default colors
const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700", // Custom color
        // ... other variants
      }
    }
  }
)

// Add new variant
variant: {
  // ... existing variants
  gradient: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
}

// Customize in tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46ff', // Your brand color
          foreground: '#ffffff',
        }
      }
    }
  }
}
`;

export default function ShadcnDocs() {
    const navigate = useNavigate();
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">TOOLS</p>

            <h1 className="text-3xl font-semibold mt-2 mb-4">
                shadcn/ui - UI Components
            </h1>

            <p className="mt-4 mb-6 leading-relaxed text-lg">
                Learn how to use shadcn/ui in React and find equivalent component libraries for Vue and Angular
            </p>

            <div className="w-full flex justify-center mb-20">
                <Icon icon="mdi:package-variant" className="w-70 h-70 text-[#554DE2]"/>
            </div>

            <h2 id="what-is-shadcn" className="text-2xl font-semibold mt-12 mb-4">
                What is shadcn/ui?
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                shadcn/ui is not a traditional component library. Instead, it's a collection of re-usable components
                built with Radix UI and Tailwind CSS that you <strong>copy and paste</strong> into your apps. This
                means you own the code and can customize it however you want.
            </p>

            <p className="mt-4 mb-6 leading-relaxed">
                The components are built on top of Radix UI primitives, which are accessible by default and provide
                excellent keyboard navigation and screen reader support. They're styled with Tailwind CSS, making
                them highly customizable.
            </p>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <div className="flex items-start gap-3">
                    <Icon icon="mdi:information" width="28" height="28" className="text-[#554DE2] shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                        <ul className="space-y-2 text-[#4B5563]">
                            <li>• <strong>You own the code:</strong> Copy-paste, not npm install</li>
                            <li>• <strong>Built on Radix UI:</strong> Accessible by default</li>
                            <li>• <strong>Tailwind CSS:</strong> Highly customizable</li>
                            <li>• <strong>TypeScript:</strong> Full type safety</li>
                            <li>• <strong>Framework-specific:</strong> Currently React/Next.js only</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 id="react-integration" className="text-2xl font-semibold mt-12 mb-4">
                React Integration
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                shadcn/ui is designed for React and Next.js. Installation is straightforward using the CLI.
            </p>

            <div className="mb-6">
                <CodeBlock code={shadcnInstall} language="bash" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                The CLI creates a <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">components.json</code> config file:
            </p>

            <div className="mb-6">
                <CodeBlock code={shadcnConfig} language="json" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                When you add a component, it copies the code into your project. Here's what a button component looks like:
            </p>

            <div className="mb-6">
                <CodeBlock code={shadcnButton} language="tsx" />
            </div>

            <p className="mt-4 mb-4 leading-relaxed">
                Then use it in your components:
            </p>

            <div className="mb-6">
                <CodeBlock code={shadcnUsage} language="tsx" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">React Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Components are installed in <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">components/ui/</code></li>
                    <li>• You can edit components directly - they're your code!</li>
                    <li>• Use the <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">cn()</code> utility for conditional classes</li>
                    <li>• Components work with both React and Next.js</li>
                    <li>• Check the shadcn/ui website for all available components</li>
                </ul>
            </div>

            <h2 id="vue-alternatives" className="text-2xl font-semibold mt-12 mb-4">
                Vue Alternatives
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Since shadcn/ui is React-specific, Vue developers have excellent alternatives. The two main options
                are <strong>PrimeVue</strong> (comprehensive component library) and <strong>Radix Vue</strong>
                (primitives like Radix UI, but for Vue).
            </p>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-xl mb-3">Option 1: PrimeVue</h3>
                    <p className="text-[#4B5563] leading-relaxed mb-4">
                        PrimeVue is a comprehensive component library similar to Material-UI but for Vue. It has
                        a large collection of components and excellent documentation.
                    </p>
                    <div className="mb-4">
                        <CodeBlock code={vuePrimeVue} language="bash" />
                    </div>
                    <div className="mb-4">
                        <CodeBlock code={vuePrimeVueExample} language="vue" />
                    </div>
                </div>

                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-xl mb-3">Option 2: Radix Vue + Custom Components</h3>
                    <p className="text-[#4B5563] leading-relaxed mb-4">
                        For a shadcn-like experience, use Radix Vue primitives and build your own components
                        styled with Tailwind CSS. This gives you the same flexibility as shadcn.
                    </p>
                    <div className="mb-4">
                        <CodeBlock code={vueRadixVue} language="bash" />
                    </div>
                    <div className="mb-4">
                        <CodeBlock code={vueRadixVueExample} language="vue" />
                    </div>
                </div>
            </div>

            <h2 id="angular-alternatives" className="text-2xl font-semibold mt-12 mb-4">
                Angular Alternatives
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                Angular has two excellent options: <strong>PrimeNG</strong> (comprehensive library) and
                <strong>Angular Material</strong> (official Google component library).
            </p>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-xl mb-3">Option 1: PrimeNG</h3>
                    <p className="text-[#4B5563] leading-relaxed mb-4">
                        PrimeNG is the Angular version of PrimeVue. It has a massive component library and
                        excellent TypeScript support.
                    </p>
                    <div className="mb-4">
                        <CodeBlock code={angularPrimeNG} language="bash" />
                    </div>
                    <div className="mb-4">
                        <CodeBlock code={angularPrimeNGExample} language="typescript" />
                    </div>
                    <div className="mb-4">
                        <CodeBlock code={angularComponent} language="typescript" />
                    </div>
                </div>

                <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-xl mb-3">Option 2: Angular Material</h3>
                    <p className="text-[#4B5563] leading-relaxed mb-4">
                        Angular Material is the official component library from Google, implementing Material Design.
                        It's well-maintained and has excellent documentation.
                    </p>
                    <div className="mb-4">
                        <CodeBlock code={angularMaterial} language="bash" />
                    </div>
                    <div className="mb-4">
                        <CodeBlock code={angularMaterialExample} language="typescript" />
                    </div>
                </div>
            </div>

            <h2 id="customization" className="text-2xl font-semibold mt-12 mb-4">
                Customization
            </h2>

            <p className="mt-4 mb-6 leading-relaxed">
                One of shadcn/ui's biggest advantages is that you own the code, so customization is straightforward.
                You can modify components directly, add new variants, or change styling.
            </p>

            <div className="mb-6">
                <CodeBlock code={customization} language="tsx" />
            </div>

            <div className="px-6 py-5 bg-[#f6f6f6] border border-[#f0f0f0] mb-8">
                <h3 className="font-semibold text-lg mb-3">Customization Tips</h3>
                <ul className="space-y-2 text-[#4B5563]">
                    <li>• Edit component files directly in <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">components/ui/</code></li>
                    <li>• Use Tailwind's theme configuration for global styling</li>
                    <li>• Add new variants using <code className="px-1 py-0.5 bg-gray-200 rounded text-sm font-mono">class-variance-authority</code></li>
                    <li>• Create wrapper components for common patterns</li>
                    <li>• Use CSS variables for dynamic theming</li>
                </ul>
            </div>

            <h2 id="best-practices" className="text-2xl font-semibold mt-12 mb-4">
                Best Practices
            </h2>

            <div className="space-y-6 mb-8">
                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">1. Start with Default Components</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Use components as-is first, then customize only when needed. This saves time and
                        maintains consistency.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">2. Create Wrapper Components</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        For frequently used patterns, create wrapper components that combine multiple
                        shadcn components. This reduces repetition.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">3. Use TypeScript</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        All shadcn components are written in TypeScript. Take advantage of the type safety
                        and IntelliSense support.
                    </p>
                </div>

                <div className="px-6 py-4 bg-[#f6f6f6] border border-[#f0f0f0]">
                    <h3 className="font-semibold text-lg mb-2">4. Keep Components Updated</h3>
                    <p className="text-[#4B5563] leading-relaxed">
                        Periodically check for component updates. You can re-run the add command to get
                        the latest version, but be careful with customizations.
                    </p>
                </div>
            </div>

            <div className="px-6 py-5 bg-[#554DE2]/5 border border-[#554DE2] mb-8">
                <h3 className="font-semibold text-lg mb-3">🎯 Framework Comparison</h3>
                <div className="space-y-3 text-[#4B5563]">
                    <div>
                        <strong>React:</strong> Use shadcn/ui directly - it's built for React and provides the best experience.
                    </div>
                    <div>
                        <strong>Vue:</strong> Use PrimeVue for a comprehensive library, or Radix Vue + Tailwind for shadcn-like flexibility.
                    </div>
                    <div>
                        <strong>Angular:</strong> Use PrimeNG or Angular Material - both are excellent and well-maintained.
                    </div>
                </div>
            </div>

            <div className="mt-36 gap-4 w-full bg-white text-gray-700 border border-gray-300 flex items-center justify-between">
                {/* Left button back */}
                <button
                    onClick={() => navigate("/alldocs/webdev/recharts")}
                    className="px-6 py-4 transition-all flex items-center justify-between group cursor-pointer"
                >
                    <Icon icon="tabler:arrow-left" width="24" height="24" className="text-[#554DE2] group-hover:-translate-x-1 transition-transform" />
                </button>
            </div>
        </>
    )
}

