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
  star="";
  line = "*";
  result ="";
  htmlstring="";
  enol="";
  lmao="0";
  temp=0;
  hitung(data1,data2){
  this.htmlstring="";
  this.temp= data2;
  this.data = Math.pow(data1,data2);
  if (this.data % 2 == 0){
  this.pola = "Pola B";
  for(var o=0;o<data2-1;o++){
   this.line += "*";
  }
  for(var i=data2;i<=this.data;i++){
    this.result+= this.line;
    this.result += "<br>";
    this.line+= "*";
  }
  this.htmlstring=this.result;
  this.result="";
  this.line="*";
  }
  else{
  this.pola = "Pola A";
  for(var l=0;l<data2;l++){
    this.star="";
    for(var j=this.temp;j>0;j--){
      this.star += this.line;
    }
    this.temp--;
    if(l < data1){
      this.enol += this.lmao;
      this.result += this.star;
      this.result +=this.enol;
      this.result += "<br>"
    }
    else{
      this.result += this.star;
      this.result += "<br>"
    }
  }
  this.htmlstring=this.result;
  this.result="";
  this.enol="";
  this.lmao="o";
  this.line="*";
  }
  }
  reset(){
    this.result="";
    this.htmlstring="";
  }
}
