import { createAction, props } from '@ngrx/store';

export const create = createAction('[ToDo] create', 
props<{text: string}>()
);

export const newStatus = createAction('[ToDo] new status', 
props<{id: number}>()
);

export const remove = createAction('[ToDo] delete', 
props<{id: number}>()
);

export const newStatusAll = createAction('[ToDo] new status all',
props<{status: boolean}>()
);

export const edit = createAction('[ToDo] edit',
props<{id: number, text: string}>()
);