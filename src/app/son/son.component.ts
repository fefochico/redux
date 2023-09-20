import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent {
  public countSon: number | undefined;
  constructor(
    private store: Store
  ) {
    this.store.select(state=> state.counter.count).subscribe(result=> {this.countSon=result})
  }
}
