import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from "./todo/todo.reducer";
import { filtroReducer } from "./filtro/filtro.reducer";
import { Task } from "./todo/models/task.model";

export interface AppState{
    todos: Task[],
    filtro: string
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}