import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { appReducers } from '../app.reducer';
import { FilterPipe } from './todo-list/filtro.pipe';


@NgModule({
  declarations: [TodoPageComponent, TodoFooterComponent, TodoListComponent, TodoItemComponent, TodoAddComponent, FilterPipe],
  exports:[TodoPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
  ]
})
export class TodoModule { }
