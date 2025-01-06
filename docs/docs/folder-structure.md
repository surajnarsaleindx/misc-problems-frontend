---
sidebar_position: 3
---

# Project Folder Structure

This document provides an overview of the folder structure in our project. Understanding this structure is crucial for efficient navigation and development within the project.

## Key Directories

### `api/`

Contains all the API-related files. This includes service definitions, API utility functions, and any configuration related to external API calls.

### `assets/`

Holds static files such as images, fonts, and other media assets. Organizing these in a central location makes them easier to manage and reference.

### `components/`

Includes all the React components. This directory is typically subdivided into smaller units like `common/` for shared components and specific directories for domain-specific components.

### `data/`

Stores static data files, such as JSON files or any other data format that the application might use, which doesn't come from an external API.

### `lib/`

Contains libraries or reusable code that is not a React component. This can include utility functions, custom hooks, or any other JavaScript modules.

### `store/`

Houses the Redux store or any other state management logic. It includes actions, reducers, and any middleware.

### `styles/`

Contains all the styling files for the project, including global styles, theme configurations, and style utilities.

### `types/`

Dedicated to TypeScript type definitions and interfaces. This centralization of type definitions helps in maintaining consistency across the codebase.

### `utils/`

Utility functions that are used across the project. This could include formatting functions, validators, or any other generic functions.

## Conclusion

Understanding this folder structure will help you navigate and contribute to the project effectively. This structure is designed to keep the project organized and maintainable. If you add new directories or make significant changes to the structure, please update this document accordingly.
