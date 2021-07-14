import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

type InitialState = {
    loading?: boolean;
    hasError?: boolean;
    todos?: todo[];
}

//const cartInitialState : cartType[] = [];

function GetInitialState(): InitialState {
  let loading: boolean = false,
      hasError: boolean = false,
      todos: todo[] = []

  return {
    loading,
    hasError,
    todos,
  };
}

const testSlice = createSlice({
    name: "testy",
    initialState: GetInitialState(),
    reducers: {
        getTodos: (state)=>{
            state.loading = true;
        },
        getTodosSuccess: (state, action: PayloadAction<todo[]>)=>{
            state.todos = action.payload;
            state.loading = false;
            state.hasError = false;
        },
        getTodosError: (state)=>{
            state.loading = false;
            state.hasError = true;
        }

    }
  });
  export const { getTodos, getTodosSuccess, getTodosError } = testSlice.actions;

  export function fetchTestApi(){
      return async (dispatch: any) => {
        dispatch(getTodos());

        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            dispatch(getTodosSuccess(response.data));
        }
        catch(error){
            dispatch(getTodosError())
        }
      }
  }

  export const TestReducer = testSlice.reducer