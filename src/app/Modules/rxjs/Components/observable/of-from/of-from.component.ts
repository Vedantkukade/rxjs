import { Component ,OnInit} from '@angular/core';
import { DesignutilityService } from '../../../services/designutility.service';
import { from, of } from 'rxjs';
@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements  OnInit{


  constructor(private service:DesignutilityService){

  }
  obsmsg:any;
  ngOnInit(): void {
    
    const obs1=of("vedant","aniket","krushna");
    
    obs1.subscribe(res=>{
      console.log(res);
      this.service.print(res,"elcontainer")
    })



    const obs2=of({"a":"vedant","b":"aniket","c":"krushna"})

    obs2.subscribe(res=>{
      console.log(res);
      this.obsmsg=res
    })

// from


    //array

    const obs3=from(["vedant","aniket","krushna"]);
    
    obs3.subscribe(res=>{
      console.log(res);
      this.service.print(res,"elcontainer2")
    })

    //promise to observable

    const promise=new Promise(resolve=>{
      setTimeout(() => {
        resolve("Promise Resolved")
      }, 3000);
    })

    // promise.then(res=>{
    //   console.log(res)
    // })

    const obs4=from(promise);
    
    obs4.subscribe(res=>{
      console.log("promise then=>",res);
      this.service.print(res,"elcontainer3")
    })

    // string to observable


    const obs5=from("welcome");
    
    obs5.subscribe(res=>{
      console.log("string then=>",res);
      this.service.print(res,"elcontainer4")
    })
  }






}
