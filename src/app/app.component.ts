import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddToCounter, ChangeBrand, ExtractToCounter } from './redux/appState.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public count: number=0;
  public brand: string='azul';
  constructor(
    private store: Store
  ) {
    this.store.select(state=> state.counter.count).subscribe(result=> {this.count=result})
    this.store.select(state=> state.counter.brand).subscribe(result=> {this.brand=result})
  }

  public add() {
    this.store.dispatch(new AddToCounter());
  }
 
  public extract() {
    this.store.dispatch(new ExtractToCounter());
  }

  onChange(newValue:Event) {
    this.store.dispatch(new ChangeBrand(newValue.toString()));
  }
}
