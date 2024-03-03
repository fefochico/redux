import { Component, OnInit } from '@angular/core';
import * as actions from '../../filtro/filtro.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { cleanCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  standalone: false,
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit{

  filtroActual: string = 'todos';
  filtros: string[] = ['todos', 'completados', 'pendientes'];

  pendientes: number = 0;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completed).length;
    })
  }

  cambiarFiltro(filtro: string){
    this.store.dispatch(actions.setFiltro({filtro}))
  }

  limpiarCompletados(){
    this.store.dispatch(cleanCompleted())
  }
}
