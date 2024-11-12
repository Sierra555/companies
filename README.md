
# Companies Dashboard

A web application built with React and Tailwind CSS that displays information on companies using a customizable mosaic layout. This application leverages the `react-mosaic-component` library for a flexible, resizable grid, and includes dynamic data handling via custom contexts.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Context](#context)
- [Customization](#customization)
- [License](#license)

---

## Features

- **Flexible Layout**: Uses the `react-mosaic-component` for drag-and-drop, resizable components.
- **Company Information Display**: Displays data for selected companies.
- **Custom Context Provider**: Manages company data and loading state globally.
- **Docker Support**: Run the application in isolated containers with Docker Compose.
- **Responsive UI with Tailwind CSS**: Tailwind CSS provides responsive styling for a streamlined, mobile-friendly design.

## Technologies

- **React**: Component-based UI library.
- **Vite**: Next-generation, fast build tool for React applications.
- **TypeScript**: Type-safe JavaScript for improved development.
- **Tailwind CSS**: Utility-first CSS framework for creating responsive, mobile-friendly designs.
- **Docker & Docker Compose**: Containerize the app for easy deployment and setup.
- **react-mosaic-component**: Layout component library for resizable, movable windows.
- **Blueprint.js**: Provides consistent UI elements and styling.

## Setup and Installation

### Prerequisites

Ensure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed.

### Using Docker Compose

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sierra555/companies.git
   cd companies
   ```

2. **Run the application**:
   ```bash
   docker-compose up --build
   ```

   This will start both the `app` and `json-server` services:

   - **app**: The main application, accessible at [http://localhost:5173](http://localhost:5173).
   - **json-server**: Mock API server for data, accessible at [http://localhost:3001](http://localhost:3001).

### Without Docker

If you prefer to run the application without Docker, make sure you have Node.js installed and then follow these steps:

```bash
npm install
npm run dev
```
The application is set up using [Vite](https://vitejs.dev/), so the development server will start on `http://localhost:5173`.

## Usage

- **Mosaic Layout**: Click and drag the edges of each tile to resize or rearrange company information windows.
- **Ticker Selection**: Use the dropdown in each tile to select the company ticker, updating the displayed data dynamically.

## Project Structure

```plaintext
src/
├── components/                  # Reusable components for the application
│   ├── Company.tsx              # Displays information about a company
│   ├── CompanyInfo.tsx          # Filter company information
│   ├── CompanyInfoDropDown.tsx  # Ticker selector dropdown component
│   ├── index.ts                 # Exports all components for easy importing
├── context/                     # Context for managing global company data
│   ├── CompaniesContext.tsx     # Companies context definition
│   ├── CompaniesProvider.tsx    # Companies context provider
│   ├── index.ts                 # Exports all contexts for easy importing
├── App.tsx                      # Main application file
├── index.tsx                    # Entry point
├── types.ts                     # Type definitions used throughout the application
└── styles/                      # Stylesheets
    └── index.css                # Custom styles
```

## Components

### `Company`
Displays detailed information about a selected company.

### `CompanyInfo`
Filter company information based on selected ticker.

### `CompanyInfoDropDown`
Dropdown component allowing users to select a company ticker, which dynamically updates the `CompanyInfo` component.

## Context

The `CompaniesContext` is a custom React context that provides company data and loading state to components in the app.

- **`CompaniesContextType`**: Defines the structure of the context, including `companies` (an array of `CompanyType`) and `isLoading` (a boolean indicating loading state).
- **Provider**: Wraps the app in `CompaniesProvider` to ensure data and state are available throughout the component tree.

## Customization

### Mosaic Layout
Adjust the default layout by changing the `currentNode` structure in `App.tsx`. The `currentNode` object represents the initial layout, where each number represents a tile ID. Adjust the `direction`, `first`, `second`, and `splitPercentage` to create custom layouts.

### Tailwind CSS Styling
Modify the `tailwind.config.js` file to adjust or extend the default Tailwind theme as needed.

## License

This project is licensed under the MIT License.