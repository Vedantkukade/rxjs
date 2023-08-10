import { AfterViewInit, Component ,ElementRef,ViewChild} from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignutilityService } from '../../../services/designutility.service';

@Component({
  selector: 'app-fromevent',
  templateUrl: './fromevent.component.html',
  styleUrls: ['./fromevent.component.css']
})
export class FromeventComponent implements AfterViewInit {

  constructor(private service:DesignutilityService){

  }
@ViewChild("addbtn") addbtn!:ElementRef


  ngAfterViewInit(): void {
   
    let count=1

    fromEvent(this.addbtn.nativeElement, 'click').subscribe(res=>{
      let countval="Video "+count++;
      this.service.print(countval,'elcontainer')
      this.service.print(countval,'elcontainer2')
    
    })
  }



}
