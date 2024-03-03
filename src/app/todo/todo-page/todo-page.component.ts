import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {
  private statusForAll: boolean= false;
  constructor(private store: Store<AppState>){}
  
  public newStatusAll(){
    this.statusForAll=!this.statusForAll;
    this.store.dispatch(actions.newStatusAll({status: this.statusForAll}));
  }
}
