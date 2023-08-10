import { Component ,OnInit} from '@angular/core';
import { DesignutilityService } from '../../../services/designutility.service';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit{

constructor(private service:DesignutilityService){

}
names:any[]=[];

  ngOnInit(): void {
   

    const users=[
      {name:"vedant",city:"Pune"},
      {name:"Abhishek",city:"Kolhapur"},
      {name:"Amit",city:"Sangli"},
      {name:"Prashant",city:"Ajara"}
    ]

  from(users).pipe(
    // map(data=>data.name),
    pluck('name'),
    toArray()

  ).subscribe(res=>{
    // console.log(res)
    this.names=res
    console.log(this.names)
  })

  }





}
