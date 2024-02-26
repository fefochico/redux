import { createReducer, on } from '@ngrx/store';
import { Task } from './models/task.model';
import { create, edit, newStatus, newStatusAll, remove } from './todo.actions';


export interface AppState{
    todos: Task[];
}

export const initialState: Task[]= [
];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Task(text)]),
  on(newStatus, (state, { id }) => {
    return state.map(value=>{
        if(value.id==id){
            return {//Para no mutar el objeto y tener el historico de estados.
                ...value,
                completed: !value.completed
            }
        }else{
            return value;
        }
    })
  }),
  on(remove, (state, {id})=>{
    return state.filter(value=> value.id!==id);
  }),
  on(newStatusAll, (state, { status }) => {
    return state.map(value=>{
            return {//Para no mutar el objeto y tener el historico de estados.
                ...value,
                completed: status
            }
    })
  }),
  on(edit, (state, { id, text }) => {
    return state.map(value=>{
        if(value.id==id){
            return {//Para no mutar el objeto y tener el historico de estados.
                ...value,
                text: text
            }
        }else{
            return value;
        }
    })
  }),
);