import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styleUrls: ['./grandson.component.css']
})
export class GrandsonComponent {
  public brand: string | undefined;
  constructor(
    private store: Store
  ) {
    this.store.select(state=> state.counter.brand).subscribe(result=> {this.brand=result})
  }
}
