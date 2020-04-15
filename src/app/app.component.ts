import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  input1="";
  input2="";
  pola="";
  data=0;
  line = "*";
  hitung(data1,data2){
  this.data = Math.pow(data1,data2);
  if (this.data % 2 == 0){
  this.pola = "Pola B";
  const result = [];
  for(var i=0;i<this.data;i++){
    result.push(`${this.line}\n`)
    this.line +=" *";
  }
  }
  else{
  this.pola = "Pola A";
  }
  }


}
