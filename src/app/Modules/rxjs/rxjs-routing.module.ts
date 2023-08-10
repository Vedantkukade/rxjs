import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path:"",
    component:PromiceComponent
  },
  {
    path:"observable",
    component:ObservableComponent,
    children:[
      {
        path:"",
        component:ListComponent
      },
      {
        path:"fromevent",
        component:FromeventComponent
      },
      {
        path:"interval",
        component:IntervalComponent
      },
      {
        path:"of&from",
        component:OfFromComponent
      },
      {
        path:"toarray",
        component:ToarrayComponent
      },
      {
        path:"custom",
        component:CustomObservableComponent
      },
      {
        path:'map',
        component:MapComponent
      },
      {
        path:"pluck",
        component:PluckComponent
      },{
        path:"filter",
        component:FilterComponent
      }
    ]
  },
  {
    path:"**",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
