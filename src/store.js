import { configureStore, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const loadFromLocalStorage = () => {
  try {
    const toDoState = localStorage.getItem("toDos");
    if (toDoState === null) return [];
    return JSON.parse(toDoState);
  } catch (e) {
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    const toDoState = JSON.stringify(state);
    localStorage.setItem("toDos", toDoState);
  } catch (e) {
    console.log("error");
  }
};

const toDos = createSlice({
  name: "toDosReducer",
  initialState: loadFromLocalStorage(),
  reducers: {
    add: (state, action) => {
      const newState = [...state, { text: action.payload, id: uuidv4() }];
      saveToLocalStorage(newState);
      return newState;
    },
    remove: (state, action) => {
      const newState = state.filter((toDo) => toDo.id !== action.payload);
      saveToLocalStorage(newState);
      return newState;
    },
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
