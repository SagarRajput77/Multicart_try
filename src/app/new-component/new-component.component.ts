import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent {
  myName:any="";
  myname:any= " is VERy brillent";

  public Date_1 = new Date();
  date_var:any='';
  public TodayString:string='this is the string for slice method use in pipe type'
  public StudData:any =
    {name:"Alex", age:15,
     address:{city:"los-angelis", Dist:'aurngabad'}};
    
  string_s:any= 'This is way to learn Angular'; 
  Number_n:any=2.34;
  text:any = {
    email:'Sagar@gmail.com',
    contact:7798940629
  }
  text1:any = Object.assign(this.StudData,this.text);
  amn:any=1000;
  
  gender:string='Shital';
}
