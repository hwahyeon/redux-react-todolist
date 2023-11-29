import {  configureStore,  createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: uuidv4() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
  }
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
