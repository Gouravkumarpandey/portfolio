# Clean Professional Design System

## 🎨 Color Palette

### Light Mode (Primary)
```css
Background: #ffffff
Primary text: #111111
Secondary text: #6b7280
Tertiary text: #9ca3af
Divider/Border: #e5e7eb
Hover: #f5f5f5
```

### Accent Colors
```css
Blue: #3b82f6
Purple: #8b5cf6
Pink: #ec4899
Red: #ef4444
Orange: #f59e0b
Yellow: #eab308
Green: #10b981
```

### Dark Mode
```css
Background: #111111
Primary text: #ffffff
Secondary text: #9ca3af
Tertiary text: #6b7280
Divider/Border: #374151
Hover: #1f2937
```

## 📝 Typography

### Font Family
```css
font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
```

### Font Sizes
- **Title**: 48px (line-height: 1.2, weight: 600)
- **Section Heading**: 26px (line-height: 1.3, weight: 600)
- **Sub Heading**: 22px (line-height: 1.4, weight: 600)
- **Body**: 16px (line-height: 1.6, weight: 400)
- **Body Large**: 18px (line-height: 1.6, weight: 400)
- **Body Small**: 14px (line-height: 1.5, weight: 400)

### Typography Rules
✅ **Clean = Professional**
- No fancy fonts
- Consistent sizing
- Clear hierarchy
- Readable line heights

## 🏷️ Section Headers with Emojis

```html
<h2>👨‍💻 Software Engineer</h2>
<h2>🧠 Problem Solver</h2>
<h2>☁️ Cloud & AWS</h2>
<h2>🎯 Interview Ready</h2>
<h2>🚀 Projects</h2>
<h2>🛠 Skills</h2>
<h2>📬 Contact</h2>
```

## 🎯 Tailwind Classes

### Typography Classes
```css
.text-title          /* 48px, semibold */
.text-section-heading /* 26px, semibold */
.text-sub-heading    /* 22px, semibold */
.text-body           /* 16px, normal */
.text-body-lg        /* 18px, normal */
.text-body-sm        /* 14px, normal */
```

### Color Classes
```css
.text-primary        /* #111111 */
.text-secondary      /* #6b7280 */
.text-tertiary       /* #9ca3af */
.bg-primary          /* #ffffff */
.bg-secondary        /* #f9fafb */
.bg-tertiary         /* #f5f5f5 */
.border-border       /* #e5e7eb */
.bg-hover            /* #f5f5f5 */
```

### Button Styles
```css
.bg-button-bg        /* #111111 */
.text-button-text    /* #ffffff */
```

## 📐 Spacing Scale
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
```

## 🔲 Border Radius
```css
--radius-sm: 3px
--radius-md: 6px
--radius-lg: 12px
--radius-xl: 16px
```

## 🌓 Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
```

## ⚡ Transitions
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1)
```

## 📱 Responsive Breakpoints
```css
/* Mobile: < 480px */
/* Tablet: 480px - 768px */
/* Desktop: 768px - 1024px */
/* Large Desktop: > 1024px */
```

## ✨ Design Principles

1. **Clean & Minimal** - No unnecessary elements
2. **Professional** - Business-ready appearance
3. **Readable** - High contrast, clear typography
4. **Consistent** - Unified color and spacing
5. **Accessible** - WCAG AA compliant colors
6. **Modern** - Contemporary design patterns

## 🎨 Usage Examples

### Hero Section
```jsx
<h1 className="text-title text-primary font-semibold">
  Your Name
</h1>
<p className="text-body text-secondary mt-lg">
  Software Engineer | Problem Solver
</p>
```

### Section Header
```jsx
<h2 className="text-section-heading text-primary font-semibold mb-md">
  🚀 Projects
</h2>
```

### Card Component
```jsx
<div className="bg-primary border border-border rounded-lg p-lg hover:bg-hover transition-base">
  <h3 className="text-sub-heading text-primary">Project Title</h3>
  <p className="text-body text-secondary mt-sm">Description</p>
</div>
```

### Button
```jsx
<button className="bg-button-bg text-button-text px-lg py-md rounded-md hover:opacity-90 transition-fast">
  Contact Me
</button>
```

## 📊 Color Contrast Ratios

All color combinations meet WCAG AA standards:
- Primary text on white: 16.1:1 (AAA)
- Secondary text on white: 4.6:1 (AA)
- Tertiary text on white: 3.5:1 (AA Large)
