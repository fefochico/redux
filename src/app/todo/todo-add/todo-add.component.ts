import { Component } from '@angular/core';
import { AppState } from '../todo.reducer';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: false,
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent{
  public txtInput: FormControl;
  
  constructor(private store: Store<AppState>){
    this.txtInput= new FormControl('', Validators.required);
  }

  public add(){
    if(this.txtInput.invalid) return;
    this.store.dispatch(actions.create({text: this.txtInput.value}));
    this.txtInput.reset();
  }
  
}
