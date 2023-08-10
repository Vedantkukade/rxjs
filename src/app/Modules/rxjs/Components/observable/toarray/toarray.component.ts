import { Component,OnInit } from '@angular/core';
import { DesignutilityService } from '../../../services/designutility.service';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.css']
})
export class ToarrayComponent implements OnInit{

  source!:Subscription

  users=[
    {
      name:"vedant",marks:"89"
    },
    {
      name:"nilesh",marks:90
    },
    {
      name:"jaydip",marks:95
    }
  ]
  
  constructor(private service:DesignutilityService){}

  ngOnInit(): void {
   
    // interval example
    const broad=interval(1000);

    this.source=broad.pipe(
      take(5),
      toArray()
    ).subscribe(res=>{
      console.log(res)
      this.service.print(res,'elcontainer')

      // if(res>=5){
      //   this.source.unsubscribe()
      // }
    })


    // from example

    const broad2=from(this.users)

    broad2.pipe(toArray()).subscribe(res=>{
      console.log(res)
      this.service.print(JSON.stringify(res),'elcontainer2')
    })


    // of example

    const broad3=of('vedant','nilesh','jaydip');

    broad3.pipe(toArray()).subscribe(res=>{
      console.log(res)
      this.service.print(res,'elcontainer3')
    })
  }

  
}
