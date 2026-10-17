# 📝 Notes App

A fast, responsive, and minimalist Notes application built with **React 19**, **Vite**, and **Tailwind CSS v4**. It allows users to quickly create, view, and manage personal notes and tasks with a clean dark-themed interface.

---

## ✨ Features

- **Add Notes**: Create notes with a custom title/heading and detailed description.
- **Visual Note Cards**: Render notes on decorative sticky-style cards.
- **Delete Notes**: Remove completed or unwanted notes in a single click.
- **Modern Minimalist UI**: Dark-mode aesthetic powered by Tailwind CSS v4 with smooth hover states and responsive layouts.
- **Lightning-Fast Development**: Instant Hot Module Replacement (HMR) powered by Vite.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Frontend UI library and component state management |
| **[Vite](https://vite.dev/)** | Next-generation frontend build tool and dev server |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first styling with `@tailwindcss/vite` integration |
| **[ESLint](https://eslint.org/)** | Code quality and linting |

---

## 📁 Project Structure

```text
notes-app/
├── public/                 # Static assets (favicons, SVG icons)
│   ├── favicon.svg
│   └── icons.svg
├── src/                    # Source files
│   ├── App.css             # Tailwind CSS imports
│   ├── App.jsx             # Main application component & notes logic
│   ├── index.css           # Global Tailwind directives
│   └── main.jsx            # Application entry point (React DOM root)
├── index.html              # HTML template
├── package.json            # Project dependencies & scripts
├── vite.config.js          # Vite configuration with Tailwind & React plugins
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and `npm` installed on your machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd "notes-app"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the local URL shown in the terminal (typically `http://localhost:5173`).

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` directory. |
| `npm run preview` | Locally serves and previews the production build. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## 💡 How It Works

- **State Management**: The app uses React's `useState` hook to keep track of:
  - `heading`: Controlled input for the note's title.
  - `detail`: Controlled textarea for the note's description.
  - `task`: Array storing the list of created note objects `{ heading, detail }`.
- **Form Submission**: On clicking **Submit**, the form prevents default page reload, appends the new note object into `task`, and resets the input fields.
- **Deletion**: Each note card has a **delete** button that filters/splices the selected item by its array index and updates the state.

---

## 🔮 Roadmap / Future Enhancements

- [ ] **LocalStorage Persistence**: Keep notes saved across browser sessions.
- [ ] **Edit Note Functionality**: Enable updating note titles and descriptions inline or via a modal.
- [ ] **Timestamps**: Display note creation date and time.
- [ ] **Search & Filter**: Search notes by keyword or tags.
- [ ] **Color Themes / Tags**: Add categories and custom card background colors.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
