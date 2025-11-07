# Code Atlas UI Patterns & Design System

This document outlines the visual design patterns and component styles used throughout Code Atlas documentation pages.

## Color Palette

### Primary Colors
- **Primary Purple**: `#554DE2` - Main brand color
- **Secondary Purple**: `#4f46ff` - Accent and interactive elements
- **Dark Purple**: `#110b8c` - Active states

### Neutral Colors
- **Light Gray Background**: `#f6f6f6` - Card backgrounds
- **Border Gray**: `#f0f0f0` - Default borders
- **Text Gray**: `#7b7f85` - Secondary text
- **Medium Gray**: `#6b7280` - Body text
- **Dark Gray**: `#4B5563` - Primary text
- **Number Badge Gray**: `#edeaea` - Numbered step backgrounds

## Component Patterns

### 1. Category Navigation Buttons

**Structure**: 2-column grid layout with clickable category cards

```tsx
<div className="grid grid-cols-2 gap-4">
  <button className="px-6 py-2 bg-[#f6f6f6] w-full flex gap-4 justify-start items-start cursor-pointer border border-[#f0f0f0] hover:border-[#4f46ff] transition-all">
    <Icon icon="icon-name" width="34" height="34" className="text-[#4f46ff]" />
    <div className="flex flex-col">
      <h2 className="font-semibold text-lg text-left">Category Title</h2>
      <p className="text-[#7b7f85] text-left">Description text</p>
    </div>
  </button>
</div>
```

**Key Characteristics**:
- Light gray background (`#f6f6f6`)
- Subtle border that becomes purple on hover (`#f0f0f0` → `#4f46ff`)
- Icon fixed at 34x34px in primary purple
- Horizontal layout with icon on left, content on right
- Left-aligned text for better readability
- Smooth transition on hover

**Usage**: Use for main category navigation, topic selection, or feature showcases

---

### 2. Numbered Step Lists

**Structure**: Vertical list with square numbered badges

```tsx
<div className="space-y-6 mt-6 mb-8">
  <div className="flex gap-4">
    <div className="shrink-0 w-8 h-8 bg-[#edeaea] text-[#7b7f85] flex items-center justify-center font-semibold">
      1
    </div>
    <div>
      <h3 className="font-semibold text-lg mb-2">Step Title</h3>
      <p className="text-[#6b7280] leading-relaxed">
        Step description and details
      </p>
    </div>
  </div>
</div>
```

**Key Characteristics**:
- Square badge: 32x32px (`w-8 h-8`)
- Light gray background (`#edeaea`)
- Gray text for number (`#7b7f85`)
- **No border or rounded corners** - clean square design
- Fixed width with `shrink-0` to prevent badge distortion
- Generous vertical spacing (`space-y-6`)
- Left-aligned content with `gap-4` between badge and text

**Usage**: Perfect for step-by-step guides, tutorials, or sequential instructions

---

### 3. Section Headers

**Pattern**: Consistent typography hierarchy

```tsx
<p className="text-[#4f46ff] font-semibold text-sm">CATEGORY LABEL</p>
<h1 className="text-3xl font-semibold mt-2 mb-4">Main Page Title</h1>
<h2 className="text-2xl font-semibold mt-12 mb-4">Section Title</h2>
<h3 className="font-semibold text-lg mb-2">Subsection Title</h3>
```

**Key Characteristics**:
- Small purple uppercase labels above main titles
- Large margins above h2 sections (`mt-12`) for clear separation
- Consistent font weights (all `font-semibold`)
- Predictable spacing patterns

---

### 4. Icon Integration

**Pattern**: Iconify icons with consistent sizing

```tsx
<Icon icon="teenyicons:react-outline" width="34" height="34" className="text-[#4f46ff]" />
```

**Key Characteristics**:
- Standard size: 34x34px for category cards
- Primary purple color (`#4f46ff`)
- Uses `shrink-0` when in flex containers
- Common icon libraries: `mdi:`, `teenyicons:`, `akar-icons:`, `lineicons:`, `clarity:`

---

### 5. Interactive Links

**Pattern**: Inline purple underlined links

```tsx
<a onClick={() => navigate("/path")}
   className="font-bold text-[#4f46ff] underline hover:decoration-2 cursor-pointer">
  Link Text
</a>
```

**Key Characteristics**:
- Purple color matching brand (`#4f46ff`)
- Always underlined
- Thicker underline on hover (`decoration-2`)
- Bold font weight
- Cursor pointer for clickability

---

## Design Principles

### Blocky, Clean Aesthetic
- **Square corners** preferred over rounded edges (except where noted)
- Clear rectangular shapes with defined borders
- No shadows or gradients - flat design
- High contrast between elements

### Consistent Spacing
- Large section gaps: `mt-12 mb-4`
- Medium element gaps: `gap-4`
- List item spacing: `space-y-6`
- Consistent padding: `px-6 py-2` for buttons

### Typography
- **Font**: Uses system font stack
- **Weights**: Primarily semibold for headers, regular for body
- **Line Height**: `leading-relaxed` for better readability
- **Alignment**: Left-aligned text throughout

### Color Usage Strategy
1. Purple for all interactive elements and accents
2. Gray scale for content hierarchy
3. Minimal color palette keeps focus on content
4. Hover states use purple to indicate interactivity

---

## Layout Grid

### Category Cards Grid
```
┌──────────────┬──────────────┐
│   [Icon]     │   [Icon]     │
│   Title      │   Title      │
│   Desc       │   Desc       │
├──────────────┼──────────────┤
│   [Icon]     │   [Icon]     │
│   Title      │   Title      │
│   Desc       │   Desc       │
└──────────────┴──────────────┘
```

### Numbered Steps Layout
```
┌───┐ Title
│ 1 │ Description text that wraps
└───┘ and continues...

┌───┐ Title
│ 2 │ Description text that wraps
└───┘ and continues...
```

---

## Accessibility Notes

- All interactive elements have clear hover states
- Color contrast meets WCAG standards
- Semantic HTML with proper heading hierarchy
- Click targets are adequately sized (minimum 32x32px)
- Icons are decorative with text labels provided

---

## When to Use Each Pattern

| Pattern | Use Case |
|---------|----------|
| **Category Buttons** | Navigation to major sections, feature showcases, topic selection |
| **Numbered Steps** | Tutorials, getting started guides, sequential workflows |
| **Section Headers** | Document structure, content organization |
| **Icons** | Visual categorization, brand recognition, quick identification |
| **Inline Links** | Cross-references, external resources, navigation within content |

---

## Anti-Patterns (What to Avoid)

❌ **Don't**: Use rounded corners on numbered step badges
✅ **Do**: Keep them square for the clean, blocky aesthetic

❌ **Don't**: Mix color schemes - stick to purple and gray
✅ **Do**: Use the defined color palette consistently

❌ **Don't**: Use inconsistent icon sizes
✅ **Do**: Standardize at 34x34px for category cards

❌ **Don't**: Add shadows or depth effects
✅ **Do**: Maintain the flat, clean design

❌ **Don't**: Use multiple font weights
✅ **Do**: Stick to semibold for headers, regular for body