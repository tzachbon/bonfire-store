import { Inject, Injectable } from '@angular/core';
import { WithObservable } from '@intelligo.ai/bonfire';
import { BehaviorSubject } from 'rxjs';
import { BonfireStore } from './bonfire-store.model';


// @dynamic
@Injectable({
  providedIn: 'root'
})
export class BonfireStoreService<T, J = any> extends BonfireStore.Store<T> {
  @WithObservable() private subStores: BonfireStore.Store<J>[] = [];
  private subStores$: BehaviorSubject<BonfireStore.Store<J>[]>;
  constructor(
    @Inject(BonfireStore.BONFIRE_CONFIG) private initialValue: T
  ) {
    super(initialValue);
    this.store = this.initialValue;
  }


  createLocalStore(initialValue: J) {
    const storeKey = (Math.random() * 1000000000).toFixed();
    this.subStores.push(new BonfireStore.Store<J>(initialValue, storeKey));
    return this.subStores[this.subStores.length - 1];
  }



}
