import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Task } from '../models/task.model';
import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import * as actions from '../todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  @Input() item!: Task;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  public editando: boolean=false;
  public chkCompletado!: FormControl;
  public txtInput!: FormControl;

  constructor( private store: Store<AppState>){
  }

  ngOnInit(): void {
    this.chkCompletado= new FormControl(this.item!.completed);
    this.txtInput= new FormControl(this.item!.text, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.newStatus({id: this.item!.id}))
    })
  }

  public remove(){
    this.store.dispatch(actions.remove({id: this.item!.id}))
  }

  public edit(){
    this.editando= true;
    this.txtInput!.setValue(this.item?.text);

    setTimeout(()=>{
      this.txtInputFisico!.nativeElement.select();
    },1)
  }

  public finishEdit(){
    if(!this.editando) return;

    this.editando= false;

    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.item.text) return;
    
    this.store.dispatch(actions.edit({
      id: this.item.id,
      text: this.txtInput.value
    }));
  }

}
