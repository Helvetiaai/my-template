### ✅ `README.md`

````md
# ⚙️ Solo Dev Starter – Cursor Ready Template

This template is built for **serious solo developers** who prioritize speed, structure, and clarity.  
Designed for use with **Cursor**, Vite, MUI, Prisma, and modern tooling.  
Ideal for launching small-to-mid projects without overengineering.

## 🧠 Cursor & AI Instructions

If you're an AI assistant (like Cursor), follow these expectations:
- Respect modular structure and file semantics
- Avoid overengineering — clarity > cleverness
- Suggest reusable logic via hooks, helpers, or services when applicable
- Inline code is acceptable only for trivial operations
- Boost priority folders: `src/features`, `src/shared`, `prisma`, `doc`

## 🧪 Development Principles (Updated)

| Principle                              | When to Apply                                                                 |
|----------------------------------------|--------------------------------------------------------------------------------|
| ✅ Modular components with logic split | Break into small units if it improves clarity, reuse, or testing               |
| ✅ Domain-driven naming                 | Names must reflect **purpose**, not technical type                             |
| ✅ Inline logic only when trivial      | Extract logic if more than one line or reused, even locally                   |
| ✅ Prefer `type` over `any`            | Use `any` only with `// TODO:` tags — aim for clarity not ceremony            |
| ✅ Avoid typing gymnastics             | Don't overengineer generics, but never skip types where they clarify behavior |
| ✅ Consistent file structure           | Every domain should follow a repeatable folder logic                          |
| ✅ Context-aware grouping              | Group by **feature** or **domain**, not tech layer                            |
| ✅ Extract hooks early                 | If logic is reused twice or grows complex, extract                            |
| ✅ AI-first scaffolding                | Prefer predictable file names and structure to help Cursor do its job         |

## 🗂 Folder Structure (Scaffold Example)

```txt
src/
  features/
    booking/
      components/
      hooks/
      services/
      types.ts
  shared/
    hooks/
    types/
    constants.ts
    utils.ts
  pages/
    Home.tsx
  App.tsx

prisma/
  schema.prisma
  seed.ts

doc/
  planning.md
  glossary.md
````

## 🚀 Quickstart

```bash
git clone https://github.com/Helvetiaai/my-template my-new-project
cd my-new-project
npm install
npm run dev
```

## 🧰 Recommended Tooling

* [Cursor](https://cursor.sh) – AI-native editor with context injection
* Vite – lightning-fast dev server
* MUI – component styling and UI consistency
* Prisma – typed DB schema with PostgreSQL
* Tailwind (optional) – utility-first styling if MUI not used

## 🧠 Philosophy Recap

* **Working clarity > clever abstraction**
* **Velocity with structure beats premature optimization**
* **Every file should teach the AI what it is and how it behaves**

Start fast. Scale smart. Never fight your stack. ⚡

````