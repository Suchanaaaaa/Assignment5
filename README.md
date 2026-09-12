# 🚀 Dev Stack

A lightweight and dynamic React interface designed for discovering technology stacks, evaluating modern development tools, and building customized stack collections effortlessly.

---

## 🛠️ Technologies Used

* **React.js** (Frontend Library)
* **Vite** (Build Tool)
* **Tailwind CSS** (Styling & Design System)
* **JavaScript (ES6+)**
* **JSON** (Local Data Source)

---

## ✨ Key Features

* 🔍 **Interactive Technology Search & Filter:** Easily filter and explore popular technology stacks based on categories and roles.
* ➕ **Dynamic Stack Builder:** Add or remove technologies from your personal stack panel in real-time with live updates.
* 📱 **Responsive & Modern UI:** A clean, mobile-first design built with Tailwind CSS for smooth user experience across all devices.

---

## 📚 React Q&A Section

### 1. What is JSX, and why is it used in React?
**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows us to write HTML directly inside JavaScript code. It makes writing React components faster, cleaner, and easier to read by visually matching the output structure.

### 2. What is the difference between props and state?
* **Props (Properties):** Read-only data passed down from a parent component to a child component. It cannot be modified by the child.
* **State:** Internal data managed within a component that can change over time (e.g., user input, UI toggles) and causes the component to re-render when updated.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook creates reactive state variables in functional components. In this project, `useState` was used in `App.jsx` to store the technologies list, handle the search query, and manage selected tools inside the user's stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects like API fetching or event listeners. It was used in this project to fetch technology data asynchronously from `technologies.json` when the component first mounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React identify which items have changed, been added, or removed. It ensures efficient rendering by updating only the modified elements in the Virtual DOM instead of re-rendering the whole list.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI elements based on specific conditions. 
**Example:** Displaying an empty stack message when no items are selected:
```jsx
{selectedStack.length === 0 ? (
  <p>No technologies selected yet.</p>
) : (
  <StackList items="{selectedStack}"/>
)}
