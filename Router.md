# How to Add New Documentation

## When you create a new doc in the `docs` folder, follow these 3 steps to link it to the app:

### Step 1: Create Your Doc Component

Create your `.tsx` file in the appropriate folder:

```
react-client/src/docs/Welcome/
├── GetStarted/
├── Devices/
├── AppLogic/
├── CodeAtlasTools/
└── AdditionalResources/
```

Example: `react-client/src/docs/Welcome/GetStarted/Installation.tsx`
```javascript
export default function Installation() {
    return (
        <>
            <p className="text-[#4f46ff] font-semibold text-sm">GET STARTED</p>
            <h1 className="text-3xl font-semibold mt-2">Installation</h1>
            <p className="mt-2">Your content here...</p>
        </>
    )
}
```

### Step 2: Link It in Welcome.tsx

**File:** `react-client/src/pages/AllDocs/Welcome.tsx`

1. **Import it:**
```javascript
import Installation from "../../docs/Welcome/GetStarted/Installation"
```

2. **Add the case:**
```javascript
function renderDocs() {
    switch (section) {
        case "installation":
            return <Installation />
        // ... other cases
    }
}
```

3. **Add the button:**
```javascript
<button
    onClick={() => navigate("/alldocs/welcome/installation")}
    className={`${section === "installation"
        ? "text-[#110b8c] font-semibold bg-[#eae9ff]"
        : "text-[#4B5563]"
        } cursor-pointer transition-all opacity-80 hover:opacity-100 hover:bg-gray-100 px-2 py-1 flex justify-between items-center`}
>
    Installation
</button>
```

### Step 3: Access Your Doc

URL: `/alldocs/welcome/installation`

---

## For Other Sections (WebDev, Mobile, Desktop, etc.)

These pages don't use the Welcome routing system. They are **single-page components**.

**To add docs to these pages:**
1. Go directly to the page file: `react-client/src/pages/AllDocs/{PageName}.tsx`
2. Edit the file and add your content
3. No routing setup needed - they already have their routes in `App.tsx`

**Example:** Adding content to Mobile page

**File:** `react-client/src/pages/AllDocs/Mobile.tsx`
```javascript
export default function Mobile() {
    return (
        <>
            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 pt-4 px-6 max-w-70 overflow-y-auto">
                    {/* Sidebar navigation */}
                </div>

                <div className="flex-1 pt-4 flex justify-center">
                    <div className="min-w-190">
                        <h1 className="text-3xl font-semibold">Mobile Development</h1>
                        <p className="mt-4">Your documentation content here...</p>
                    </div>
                </div>

                <div className="flex-1 pt-4 max-w-70 overflow-y-auto hidden xl:block">
                    {/* Right sidebar */}
                </div>
            </div>
        </>
    )
}
```

**Routes are already set in App.tsx:**
- `/alldocs/webdev` → WebDev.tsx
- `/alldocs/mobile` → Mobile.tsx
- `/alldocs/desktop` → Desktop.tsx
- `/alldocs/cloud` → Cloud.tsx
- `/alldocs/backend` → Backend.tsx
- `/alldocs/deployment` → Deployment.tsx
- `/alldocs/dataanalytics` → DataAnalytics.tsx

---

## React Router DOM Structure

**How it works:**

```javascript
// App.tsx
<Route path="alldocs" element={<AllDocsMain />}>
    <Route path="welcome/:section" element={<Welcome />} />
    <Route path="mobile" element={<Mobile />} />
    <Route path="desktop" element={<Desktop />} />
    // etc...
</Route>
```

- **AllDocsMain** = Parent layout (navbar + tabs)
- **Welcome** = Uses `:section` parameter for dynamic routing
- **Mobile, Desktop, etc.** = Static single pages (no dynamic routing)

**Welcome uses URL parameters:**
- `/alldocs/welcome/overview` → `section = "overview"`
- `/alldocs/welcome/installation` → `section = "installation"`

**Other pages use static paths:**
- `/alldocs/mobile` → renders Mobile.tsx
- `/alldocs/desktop` → renders Desktop.tsx

---

## Quick Reference

| Section | How to Add Docs |
|---------|----------------|
| **Welcome** | 1. Create in `docs/Welcome/` <br> 2. Import in `Welcome.tsx` <br> 3. Add case + button |
| **Mobile, Desktop, etc.** | Edit the page file directly in `pages/AllDocs/` |

**Key Rule:**
- Welcome = Multi-section with dynamic routing
- Everything else = Single page, edit directly
