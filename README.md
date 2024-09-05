# My React Playground App

[![Netlify Status](https://api.netlify.com/api/v1/badges/db92d949-49a1-4101-b8b1-cd5c0dfd62f2/deploy-status)](https://app.netlify.com/sites/playground-react-vite/deploys)

A playground project to explor and experiment with Vite, React, Chakra UI, Tailwind CSS, and Redux. This project includes a feature sidebar navigation similar to Jira, a responsive design, and a to-do list component with an accordion and a collection of applied experiments.

[View Live Demo](https://playground-react-vite.netlify.app)

## Make your own

Clicking this button will clone the repo and deploy it to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/darkmastermindz/playground-react-vite&utm_source=github)

## Features

- **Vite**: Fast and modern development build tool.
- **React**: A JavaScript library for building user interfaces.
- **Chakra UI**: A simple, modular, and accessible component library.
- **Tailwind CSS**: Utility-first CSS framework packed with classes that can be composed to build any design directly in your markup.
- **Redux**: State management tool, using slices like `dataSlice` for efficient state handling.

## Custom Components

- **Sidebar Navigation**: A responsive sidebar navigation that can be toggled between expanded and collapsed views.
- **To-Do List with Accordion**: A to-do list component with filtering and accordion display for task management.
- **Editable List**: Dynamically editable list items with real-time updates using Chakra UI components and Redux for state management.

## Experimental Features

This project also includes an experimental section demonstrating dynamic data management in React and Redux:

### **Experiment: Managing Dynamic Data with Redux**

You can dynamically manage a list of items using the `EditableToDoList` component. Features include:
- Adding new items with a unique ID and description.
- Editing existing items with live preview and real-time updates.
- Filtering tasks by their status.
- Undo functionality to revert fetched data.
  
This experiment is located in the `AccordionToDoList` and `EditableToDoList` components, showcasing how state can be updated with a Redux slice and manipulated through actions dispatched to the store.

## Installation

To get started with this project, follow these steps:

1. Fork and clone the repository:

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

### Editable List

Experimental Data Management

The experimental data management feature demonstrates how Redux can handle dynamic lists. The data slice (dataSlice.js) is used to manage state, with actions such as updateDataSlice used to trigger state changes. This is demonstrated in the EditableList and EditableToDoList components.

The `EditableToDoList` component lets users manage a list of tasks dynamically:
- Add new tasks.
- Edit existing tasks.
- Filter tasks by status or type.

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
│   ├── EditableToDoList.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── package.json
├── postcss.config.js
└── README.md

## License

This project is licensed under the MIT License.
