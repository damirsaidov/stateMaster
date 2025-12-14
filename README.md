# Todo State Management Showcase

This repository demonstrates multiple approaches to state management in React by implementing **Todo applications** using different libraries and patterns. It includes both **synchronous** and **asynchronous** todo examples, a **global dark/light theme**, and a **responsive UI** built with Ant Design.

The project is intended for learning, comparison, and reference purposes.

---

## Features

* Multiple Todo implementations using different state management solutions
* Synchronous and asynchronous data handling
* Ant Design UI components
* Global dark/light mode using React Context
* Mobile-friendly and responsive layout (media queries)
* Clean and modular project structure

---

## Implemented State Management Solutions

### Todos

| State Management | Sync Todo | Async Todo |
| ---------------- | --------- | ---------- |
| Redux Toolkit    | Yes       | Yes        |
| Zustand          | Yes       | Yes        |
| Jotai            | Yes       | Yes        |
| MobX             | Yes       | Yes        |
| React Context    | Yes       | No         |

### Theme

* Dark / Light mode implemented using **React Context**
* Theme applied globally across all todo implementations

---

## Tech Stack

* **React**
* **Ant Design (antd)**
* **Redux Toolkit**
* **Zustand**
* **Jotai**
* **MobX**
* **React Context API**
* **CSS / Media Queries** for responsiveness

---

## Project Structure

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

## Asynchronous Todos

Async todo implementations simulate or consume asynchronous operations such as:

* API calls
* Delayed state updates
* Loading and error states

Each state management library handles async logic using its recommended approach (e.g., thunks, async actions, or side effects).

---

## UI and Responsiveness

* Built using **Ant Design components**
* Fully responsive and optimized for mobile screen sizes
* Uses media queries to adapt layouts for phones and tablets

---

## Getting Started

### Installation

```bash
git clone https://github.com/damirsaidov/stateMaster.git
cd stateMaster
npm i
```

### Running the Project

```bash
npm start
```

---

## Use Cases

* Learn and compare popular React state management libraries
* Understand sync vs async state handling
* Reference implementation for responsive React applications
* Practice global theming with Context API

---

## License

This project is open-source and available under the MIT License.

---

## Notes

This repository is designed for educational purposes and comparison. It is not intended as a production-ready application, but as a practical reference for different architectural patterns in React.
