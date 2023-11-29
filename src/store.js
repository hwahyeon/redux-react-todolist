import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

/* const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: uuidv4() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};*/

// createReducer can modify mutate state
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: uuidv4() })
    // state.push doesn't return anything. just mutate the state
  },
  [deleteToDo]: (state, action) => 
    state.filter((toDo) => toDo.id !== action.payload)
    // new state should be returned
})

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
