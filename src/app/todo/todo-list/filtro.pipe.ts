import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
    name: 'filtroTodo'
})
export class FilterPipe implements PipeTransform{
    transform(todos: Task[], filtro: string): Task[] {
        switch(filtro){
            case 'completados':
                return todos.filter(todo=> todo.completed);
            case 'pendientes':
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    }
}