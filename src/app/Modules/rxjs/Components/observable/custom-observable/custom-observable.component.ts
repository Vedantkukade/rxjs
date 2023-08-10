import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval, timeInterval } from 'rxjs';
import { DesignutilityService } from '../../../services/designutility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {


  constructor(private service: DesignutilityService) {

  }
  techstatus: any;
  techstatus2:any;
  broad!:Subscription;
  names:any;
  namestatus:any;
  state='Running';

  ngOnInit(): void {

    const source = Observable.create((observer: {
      complete(): unknown;
      error(arg0: any): unknown; next: (arg0: string) => void;
    }) => {

      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('TypeScript');
      }, 2000);

      setTimeout(() => {
        observer.next('JacaScript');
        observer.complete();

      }, 3000);

      setTimeout(() => {
        observer.next('Java');
        // observer.error(new Error('limit exceeded'));

      }, 4000);

      setTimeout(() => {
        observer.next('Django');
      

      }, 5000);

    })

    source.subscribe((res: any) => {
      // console.log(res);
      this.service.print(res, 'elcontainer')
    },

      (err: any) => {
        this.techstatus = 'error'
        
      },
      () => {
        this.techstatus = 'completed';
        
      }

    )



    const array=['Angular','TypeScript','JavaScript','Django','Python']
    const source2 = Observable.create((observer: any) => {
      let count=0
      setInterval(() => {
        observer.next(array[count]);

        if(count>=3){
          // this.broad.unsubscribe();
          observer.error(new Error('Limit Exceed'))
          
        }

        if(count>=5){
          observer.complete()
          
        }
        count++
      }, 1000)
    })


   this.broad=source2.subscribe((res: any)=>{

    // console.log(res);
    this.service.print(res,'elcontainer2');
    },
    ((err: any)=>{
      this.techstatus2='error'
    }),
    ()=>{
      this.techstatus2='completed'
    }
    )


    const namesArray=['Vedant','Nilesh','Jaydip','Achyut','Swarali','Poorva']
    const cusobs3=Observable.create((observer:any)=>{
     let count=0
      setInterval(()=>{
        observer.next(namesArray[count])
        if(count>=3){
          observer.error(new Error('Error Occured'))
        }
  
        if(count>=5){
          observer.complete();
        }
  
        count++
      },1000)

     
    })


    cusobs3.subscribe((res:any)=>{

      console.log(res);
      this.names=res;
    },
    (err:any)=>{
      this.namestatus='error'
      this.state='Error'
    },
    ()=>{
      this.namestatus='completed'
      this.state='Success'
    }
    )
  }



}
