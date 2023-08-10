import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { PromiceComponent } from './Components/promice/promice.component';
import { ObservableComponent } from './Components/observable/observable.component';
import { ListComponent } from './Components/observable/list/list.component';
import { FromeventComponent } from './Components/observable/fromevent/fromevent.component';
import { IntervalComponent } from './Components/observable/interval/interval.component';
import { OfFromComponent } from './Components/observable/of-from/of-from.component';
import { ToarrayComponent } from './Components/observable/toarray/toarray.component';
import { CustomObservableComponent } from './Components/observable/custom-observable/custom-observable.component';
import { MapComponent } from './Components/observable/map/map.component';
import { PluckComponent } from './Components/observable/pluck/pluck.component';
import { FilterComponent } from './Components/observable/filter/filter.component';



@NgModule({
  declarations: [

  
    PromiceComponent,
        ObservableComponent,
        ListComponent,
        FromeventComponent,
        IntervalComponent,
        OfFromComponent,
        ToarrayComponent,
        CustomObservableComponent,
        MapComponent,
        PluckComponent,
        FilterComponent
  ],
  imports: [
    CommonModule,
    RxjsRoutingModule
  ]
})
export class RxjsModule { }
