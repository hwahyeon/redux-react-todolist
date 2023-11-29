# To Do List with Redux Toolkit & Local Storage

**[Start](https://hwahyeon.github.io/redux-react-todolist/)**

## Overview
This ToDo List application is built using Redux Toolkit and integrates Local Storage for persistent data storage. It allows users to add and remove tasks, with each change automatically saved to Local Storage. 

## Implementation Details
- Redux Toolkit: Used for efficient state management. The createSlice function creates reducers for adding and removing ToDo items.
- Local Storage: Employed to persist the ToDo list. The application state is saved every time there's a change (addition or removal of a task).
- UUID: Utilized for generating unique identifiers for each ToDo item.

## Usage
- Adding a To-Do: Enter the text in the input field and submit the form.
- Deleting a To-Do: Click the ❌ button next to the to-do item you wish to delete.
- Detail page: Pages are provided for detailed information on each to-do.
