# 🚀 Solo Developer Project Template

Built for **personal use** → Prioritize **speed, simplicity, and working code** over perfect architecture.

---

## 🔹 1️⃣ Architecture & Code Organization

| **Principle**             | **Guideline** |
|--------------------------|--------------|
| **Single-file preference** | Keep components, logic, and styles together unless separation makes development easier. |
| **Minimal abstractions**   | Avoid utility files, services, or helper functions **unless used 3+ times**. |
| **No premature optimization** | Write working code first. Only optimize when performance becomes an issue. |
| **Simple dependencies**    | Prefer built-in browser APIs and lightweight libraries over complex frameworks. |

---

## 🔹 2️⃣ TypeScript Usage

| **Principle**                   | **Guideline** |
|--------------------------------|--------------|
| **Use types for clarity, not perfection** | Use TypeScript **only when it makes code clearer**. |
| **Avoid unnecessary complexity** | Skip generics, deep type hierarchies, and excessive type declarations. |
| **Prefer `any` or `unknown` if needed** | If strict typing slows development, use `any` to move fast. |
| **Inline types in components** | Only extract types to separate files if reused **3+ times**. |

---

## 🔹 3️⃣ Components & State Management

| **Principle**                      | **Guideline** |
|-----------------------------------|--------------|
| **Bigger components over many small ones** | Avoid excessive splitting—favor fewer, self-contained components. |
| **Simple state management**       | Prefer `useState` over Redux, Zustand, or Context unless state is deeply nested. |
| **Inline handlers unless reused** | Keep event handlers inside components unless **used 3+ times**. |
| **Co-locate logic**               | Keep logic within components unless it significantly improves readability. |

---

## 🔹 4️⃣ Project Structure (Minimal & Practical)

| **Category**          | **Guideline** |
|----------------------|--------------|
| **Components**       | Keep component-specific logic, types, and styles in the same file. |
| **Hooks**            | Extract hooks **only when reused 3+ times**. |
| **Utilities**        | Create utility functions **only when needed multiple times**. |
| **Global constants** | Use a single `constants.ts` file **only if multiple files need it**. |
| **Styling**          | Prefer **Tailwind** or **styled-components** over separate CSS files. |

### 📁 **Example Folder Structure:**
```bash
src/
  components/        # UI components
    ui/             # Reusable, stateless UI components
    features/       # Feature-specific components
  hooks/            # Only if used 3+ times
  types/            # Only if needed
  constants.ts      # Global constants (if multiple files use them)
  utils.ts          # Utility functions (only when necessary)
```

---

## 🔹 5️⃣ Development Philosophy: **Speed > Perfection**

| **Mindset**                   | **Guideline** |
|------------------------------|--------------|
| **Working code > Perfect code** | Build something functional first. Polish later if needed. |
| **Ship early, refine later**  | Done is better than perfect. |
| **No overengineering**        | Avoid patterns that slow you down—favor direct, readable solutions. |
| **Ignore best practices when they don’t help** | Best practices are for teams—**use what makes your work faster**. |
| **Personal use first, scalability second** | Optimize **only if** you need to scale a project later. |

---

## 🚀 **Summary:**
✅ **Favor bigger components, inline logic, and minimal files.**  
✅ **Use TypeScript for clarity, not strict enforcement.**  
✅ **No premature optimization—functional first, refine later.**  
✅ **Keep state simple, avoid unnecessary abstractions.**  
✅ **Ignore "best practices" if they slow you down.**  

---

## 🔹 How to Use This Template
1. **Clone this template**:
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/my-template-project.git my-new-project
   cd my-new-project
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Start the development server**:
   ```sh
   npm run dev
   ```

4. **Start building fast, without overthinking!** 🚀

