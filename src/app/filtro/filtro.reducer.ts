import { createReducer, on } from '@ngrx/store';
import { setFiltro } from './filtro.actions';

export const initialState: string = "todos";

export const filtroReducer = createReducer(initialState,
    on(setFiltro, (state, { filtro }) => {return filtro}),
);
