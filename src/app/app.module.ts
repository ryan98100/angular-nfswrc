import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';

import{Routes ,RouterModule} from '@angular/router'
const Routes:Routes = [
  {path:'/home' , component:HomeComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(Routes) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
