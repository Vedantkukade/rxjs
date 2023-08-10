import { Component ,OnInit} from '@angular/core';
import { interval ,Subscription,timer} from 'rxjs'
import { DesignutilityService } from '../../../services/designutility.service';
@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements  OnInit{

  constructor(private service:DesignutilityService){

  }

  obsMsg:any;
  videoSubscription!:Subscription
  videoSubscription2!:Subscription

  ngOnInit(): void {
    
    const broadcastVidos=interval(1000);
    //timer(delay,interval)
    const broadcastVidos2=timer(5000,1000);

   this.videoSubscription=broadcastVidos.subscribe(res=>{
      this.obsMsg="video "+res
      this.service.print(this.obsMsg,'elContainer');
   

      if(res>=5){
        this.videoSubscription.unsubscribe()
      }
    })


    this.videoSubscription2=broadcastVidos2.subscribe(res=>{
      this.obsMsg="video "+res;
      this.service.print(this.obsMsg,'elContainer2');
      this.service.print(this.obsMsg,'elContainer3');

      if(res>=5){
        this.videoSubscription2.unsubscribe();
      }
    })


  }



}


