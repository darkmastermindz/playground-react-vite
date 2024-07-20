# playground-react-vite

[![Netlify Status](https://api.netlify.com/api/v1/badges/db92d949-49a1-4101-b8b1-cd5c0dfd62f2/deploy-status)](https://app.netlify.com/sites/playground-react-vite/deploys) 

A playground project to explore and experiment with Vite, React, Chakra UI, and Tailwind CSS. This project includes a sidebar navigation similar to Jira, a responsive design, and a to-do list component with an accordion.

[View Live Demo](https://playground-react-vite.netlify.app)

## Make your own

Clicking this button will clone the repo and deploy it to Netlify, be sure to rename your repo afterwards!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/darkmastermindz/playground-react-vite&utm_source=github)

# Features

- Vite: Fast and modern development build tool.
    Currently, two official plugins are available:
    - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
    - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
        - Using SWC

- React: A JavaScript library for building user interfaces.
- Chakra UI: A simple, modular, and accessible component library that provides the building blocks you need to build your React applications.
- Tailwind CSS: A utility-first CSS framework packed with classes that can be composed to build any design directly in your markup.

## Custom Components
- Sidebar Navigation: A responsive sidebar navigation that can be toggled between expanded and collapsed views.
- To-Do List with Accordion: A to-do list component with filtering and accordion display for task management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [License](#license)

## Installation

To get started with this project, follow these steps:

1. Fork Project and Clone the repository:

    ```bash
    git clone https://github.com/your-username/playground-react-vite.git
    cd playground-react-vite
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

This project demonstrates a Vite + React setup with Chakra UI and Tailwind CSS integration. It includes a sidebar navigation and a to-do list with an accordion.

### Sidebar Navigation

The sidebar navigation can be toggled between an expanded view (with text) and a collapsed view (with icons only). The sidebar uses Chakra UI components for styling and responsiveness.

### To-Do List with Accordion

The to-do list component allows you to add tasks and categorize them based on their status (Not Started, In Progress, Completed). The tasks are displayed in an accordion format, making it easy to manage and view tasks.

## Project Structure

```bash
project-root/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── FilterForm.jsx
│   │   ├── Sidebar.jsx
│   │   ├── TaskAccordion.jsx
│   │   └── TaskCard.jsx
│   ├── data/
│   │   └── DataFetcher.js
│   ├── AccordionToDoList.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── package.json
├── postcss.config.js
└── README.md
```
