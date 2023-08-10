import { Component,OnInit } from '@angular/core';
import { Observable, Subscription, from, interval, map } from 'rxjs';
import { DesignutilityService } from '../../../services/designutility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{

  constructor(private service:DesignutilityService){

  }
  sub1!:Subscription;
  sub2!:Subscription;
  message:any;
  message2:any;

  ngOnInit(): void {
    
    
    // Ex -01

    const broadcastvideos=interval(1000);

   this.sub1=broadcastvideos.pipe(
    map(data=> 'video '+data)
   ).subscribe(res=>{
     this.message=res

    setTimeout(() => {
      this.sub1.unsubscribe()
    }, 10000);

    })


    // Ex -02

    const broadcastvideos2=interval(1000);
    this.sub2=broadcastvideos2.pipe(
      map(data=> data * 3)
    ).subscribe(res=>{
      this.message2=res

      setTimeout(() => {
        this.sub2.unsubscribe();
      }, 10000);
    })


    // Ex -03

    const array=from([
      {
        name:"Vedant", age:23
      },
      {
        name:"Kunal",age:22
      },
      {
        name:"Pankaj",age:24
      },
      {
        name:"Shubhangi",age:25
      }
    ])


    array.pipe(
      map(data=>data.name)
    ).subscribe(res=>{
      // console.log(res)
      this.service.print(res,'elcontainer')
    }
      )



    

}



}