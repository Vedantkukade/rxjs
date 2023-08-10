import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-promice',
  templateUrl: './promice.component.html',
  styleUrls: ['./promice.component.css']
})
export class PromiceComponent implements OnInit{


result1:any;

  ngOnInit(): void {
   
  

  }

  promiseval:any;

  dellAvaialble(){
    return false
  }

  hpAvailable(){
    return false
  }

  myfun(){

    let p1=new Promise((resolve,reject)=>{

      // resolve("Promise is resolved");
      // reject("Promise is rejected");
      if(this.dellAvaialble()){
        setTimeout(() => {
          resolve("dell is purchased")
        }, 3000);
      }else if(this.hpAvailable()){
        setTimeout(() => {
          resolve("hp is available")
        }, 3000);
       
      }else{
        setTimeout(() => {
          reject("Laptop is not available")
        }, 3000);
      }
    })

    p1.then(res=>{
      console.log("then code=>",res)
      this.promiseval=res;

    }).catch(res=>{
      console.log("catch code=>",res)
      this.promiseval=res;

    })
  }


  
  async async(){
    this.result1="fetching data"
    let port=new Promise((resolve,reject)=>{

      setTimeout(() => {
        resolve("data fetched")
      }, 3000);

    })

    let res= await port
    console.log(res)
    this.result1=res

   
  }



  result2:any;

  data={
    name:"Hp Laptop",
    harddisk:"2 TB",
    color:"black"
  }
  async1(){

    this.result2="fetching data"
    let buylaptop=new Promise((resolve,reject)=>{

      setTimeout(() => {
        resolve(this.data)
      }, 3000);
   
    })

    buylaptop.then(res=>{
      console.log(res);
      this.result2=JSON.stringify(res);
    })
  }



  result3:any;

 async async2(){
    this.result3="fetching data";

    let buylaptop=new Promise((resolve,reject)=>{

      setTimeout(() => {
        resolve(this.data)
      }, 3000);
    })


    let res= await buylaptop;
    this.result3=JSON.stringify(res)
  }



  result4:any;

  //promise
  // async3(){
  //   this.result4="fetching data..."

  //   let viewproducts=fetch("https://dummyjson.com/products").then(response=>response.json())

  //   viewproducts.then(res=>{
  //     this.result4=JSON.stringify(res);
  //   })
  // }


  //with asycn/await
  async async3(){
    
    this.result4="fetching data..."

    let viewproducts=fetch("https://dummyjson.com/products").then(response=>response.json())

    let res= await viewproducts;

    this.result4=JSON.stringify(res)
    
 
  }

}
