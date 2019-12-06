import { ModuleWithProviders, NgModule } from '@angular/core';
import { BonfireStoreComponent } from './bonfire-store.component';
import { BonfireStore } from './bonfire-store.model';


// @dynamic
@NgModule({
  declarations: [BonfireStoreComponent],
  imports: [
  ],
  exports: [BonfireStoreComponent]
})


export class BonfireStoreModule {
  static forRoot(useValue: BonfireStore.Config = {}): ModuleWithProviders<BonfireStoreModule> {
    return {
      ngModule: BonfireStoreModule,
      providers: [
        { provide: BonfireStore.BONFIRE_CONFIG, useValue }
      ],
    };
  }
}
