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
  data=0;
  output="Hasil: ";
  hitung(){
  this.data = parseInt(this.input1) * parseInt(this.input2);
  this.output += this.data;
  }

}
