import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent{
  public list: Task[]=[];
  public filtroActual!: string;

  constructor(private store: Store<AppState>){
    this.store
    .subscribe( ({todos, filtro}) => {
      this.list = todos;
      this.filtroActual = filtro;
    });
  }
}
