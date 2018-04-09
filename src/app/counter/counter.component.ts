import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent implements OnInit {

  counter$: Observable<number>;

  constructor(private store: Store<number>) {}

  ngOnInit() {
    this.counter$ = this.store.select<number>('counter');
  }

  increment() {
    this.store.dispatch({type: 'Increment'});
  }
  decrement() {
    this.store.dispatch({type: 'Decrement'});
  }

  reset() {
    this.store.dispatch({type: 'Reset'});
  }
}
