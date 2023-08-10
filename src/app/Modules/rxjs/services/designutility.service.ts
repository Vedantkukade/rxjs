import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }


  
  print(data:any,elementid:any){

    let el=document.createElement('li')
    el.innerText=data

    document.getElementById(elementid)?.appendChild(el)
  }
}
