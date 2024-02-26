import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { Store } from '@ngrx/store';
import { AppState } from '../todo.reducer';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent{
  public list: Task[]=[];

  constructor(private store: Store<AppState>){
    this.store.select('todos')
    .subscribe( result => this.list = result);
  }
}
