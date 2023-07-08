import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe1'
})
export class CustomPipe1Pipe implements PipeTransform {
PreName:string='';
  transform(value: any,argu:any): unknown {
    if(argu == 'male'){
      this.PreName='Mr.'
    }
    else{
      this.PreName='Miss.'
    }
    return this.PreName+' ' + value;
  }

}
