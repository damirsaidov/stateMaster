# Todo State Management Example

This repo shows different ways to handle state in React by building **Todo apps** with various tools. You'll find examples of **both simple and complex** Todos, a **site-wide dark/light theme**, and a **UI that works well on phones and computers**, thanks to Ant Design.

Think of this project as a learning resource and a way to compare different approaches.

---

## What's Inside

*   Todo examples using different state management methods
*   Examples for simple and complex data handling
*   Ant Design components
*   A global dark/light mode using React Context
*   Layout that looks good on any device (using media queries)
*   Well-organized project

---

## State Management Methods Used

### Todos

| State Management | Simple Todo | Complex Todo |
| :--------------- | :---------- | :----------- |
| Redux Toolkit    | Yes         | Yes          |
| Zustand          | Yes         | Yes          |
| Jotai            | Yes         | Yes          |
| MobX             | Yes         | Yes          |
| React Context    | Yes         | No           |

### Theme

*   Dark and Light mode controlled by **React Context**
*   Theme applied to all Todo examples

---

## Tools Used

*   **React**
*   **Ant Design (antd)**
*   **Redux Toolkit**
*   **Zustand**
*   **Jotai**
*   **MobX**
*   **React Context API**
*   **CSS / Media Queries** for responsive design

---

## Project Breakdown

```
EXAMW1/
│── src/
│   ├── context/
│   │   └── todoContext.jsx
│   │
│   ├── pages/
│   │   ├── async/
│   │   │   ├── aboutId.jsx
│   │   │   ├── jotai.jsx
│   │   │   ├── mobx.jsx
│   │   │   ├── redux.jsx
│   │   │   └── zustand.jsx
│   │   │
│   │   └── sync/
│   │       ├── context.jsx
│   │       ├── contextId.jsx
│   │       ├── jotai.jsx
│   │       ├── jotaiId.jsx
│   │       ├── mobx.jsx
│   │       ├── mobxId.jsx
│   │       ├── redux.jsx
│   │       ├── reduxId.jsx
│   │       ├── zustand.jsx
│   │       └── zustandId.jsx
│   │
│   ├── stores/
│   │   ├── async/
│   │   │   ├── jotaiAsync.js
│   │   │   ├── mobxAsync.js
│   │   │   ├── reduxAsync.js
│   │   │   └── zustandAsync.js
│   │   │
│   │   └── sync/
│   │
│   ├── App.jsx
│   ├── layout.jsx
│   ├── main.jsx
│   ├── index.css
│   └── store.js
│
│── db.json
│── eslint.config.js
│── index.html
│── package.json
│── vite.config.js
│── README.md
```

---

## Complex Todos

These examples act like they're getting data from an API or doing other things that take time, like:

*   Making API requests
*   Updating the state after a delay
*   Showing loading messages and errors

Each state management library tackles this in its own way (e.g., thunks, async actions, or side effects).

---

## UI

*   Made with **Ant Design components**
*   Looks good on phones and tablets
*   Changes layout depending on screen size

---

## How to Get Started

### Installation

```bash
git clone https://github.com/damirsaidov/stateMaster.git
cd stateMaster
npm i
```

### Run the project

```bash
npm run dev
```

---

## How to Use This

*   To learn and compare React state management options.
*   To see how to handle simple vs complex state.
*   As a reference for building responsive React apps.
*   To learn about global theming with Context API.

---

## License

This project is open-source and has an MIT License.

---

## Important

This is a learning tool for comparing different ways of doing things in React. It's not really meant to be used as a real app, but as a guide for different ways to structure your code.
