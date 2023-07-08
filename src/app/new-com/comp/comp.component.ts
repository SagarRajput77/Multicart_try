import { Component } from '@angular/core';
import { NewSService } from 'src/app/services/new-s.service';


@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {
  public arr:any=[];
  public arr1:any=[];
  constructor(private ds :NewSService){
    this.fun();
  }
  fun(){
    this.ds.get().subscribe(res =>{
      this.arr = res;
      console.log(this.arr);
    })
  }
      
  frm_sub(data:any){
    // console.log(data.value);
    this.arr1.push(data.value);
    this.ds.postD(data.value).subscribe((res:any)=>{console.log(res);
    })
  }
  // forPost(){
  //   this.ds.postD(this.arr1).subscribe((res:any)=>{
  //     console.log(res); 
      
  //   })
  // }  
  forGet(){
    this.ds.get().subscribe((res:any)=>{console.log(res);
    })
  }

}
