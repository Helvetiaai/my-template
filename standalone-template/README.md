# 🚀 Solo Developer Template with MUI + Standalone Mode

Built for **personal use** → Prioritize **speed, simplicity, and working code** over perfect architecture.

This template extends the base template with **Material UI integration** and **standalone HTML file support**.

---

## 🔹 Development Modes

This template supports two development approaches:

### 1️⃣ Traditional React App Mode

Uses Vite, React, TypeScript and Material UI for a complete application setup.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

### 2️⃣ Standalone HTML Component Mode

Create self-contained HTML files with Material UI components that work without a build step.

Example: `standalone-component.html`

- Open directly in your browser
- Edit with any text editor
- No build step or npm install required
- Great for quick prototyping

---

## 🔹 Using Material UI

### In React App Mode

- Theme configuration is in `src/theme.ts`
- Components are available via imports
- Full TypeScript support

```tsx
import { Button, Typography } from '@mui/material';

function MyComponent() {
  return (
    <div>
      <Typography variant="h1">Hello MUI</Typography>
      <Button variant="contained">Click Me</Button>
    </div>
  );
}
```

### In Standalone HTML Mode

- Load dependencies from CDN
- Use the same components directly in your HTML file
- Develop without a build step

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Load React, Material UI from CDN -->
  <!-- See standalone-component.html for full example -->
</head>
<body>
  <div id="root"></div>
  
  <script type="text/babel">
    const { Button, Typography } = MaterialUI;
    
    function MyComponent() {
      return (
        <div>
          <Typography variant="h1">Hello MUI</Typography>
          <Button variant="contained">Click Me</Button>
        </div>
      );
    }
    
    ReactDOM.render(<MyComponent />, document.getElementById('root'));
  </script>
</body>
</html>
```

---

## 🔹 Project Philosophy: **Speed > Perfection**

| **Mindset**                   | **Guideline** |
|------------------------------|--------------|
| **Working code > Perfect code** | Build something functional first. Polish later if needed. |
| **Ship early, refine later**  | Done is better than perfect. |
| **No overengineering**        | Avoid patterns that slow you down—favor direct, readable solutions. |
| **Personal use first**        | Optimize for your own workflow and preferences. |

---

## 🔹 Structure

```
/
├── src/                     # React application source
│   ├── theme.ts             # MUI theme configuration
│   ├── App.tsx              # Main App component with MUI
│   └── main.tsx             # Entry point with MUI ThemeProvider
│
├── standalone-component.html # Self-contained HTML example
└── README.md                # You are here
```

---

## 🔹 Making Use of Standalone Mode

Standalone mode is perfect for:

1. **Quick prototyping** without setup
2. **Isolated component development**
3. **Simple tools and utilities** that don't need a full app
4. **Sharing code snippets** that others can run without installing anything

To create a new standalone component:

1. Copy `standalone-component.html` 
2. Modify as needed
3. Open directly in your browser - no build step!

---

## 🚀 Get Started

```bash
# Clone this template
git clone https://github.com/YOUR_USERNAME/my-template-project.git my-new-project
cd my-new-project

# Choose your approach:
# Option 1: Traditional React App
npm install
npm run dev

# Option 2: Standalone Mode
# Just open standalone-component.html in your browser!
```

Happy coding! 🚀
