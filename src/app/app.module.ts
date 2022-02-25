import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherComponent } from './weather/weather.component';
import {createCustomElement} from '@angular/elements';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [WeatherComponent]

})
export class AppModule {
  constructor(
    private injector: Injector
  ) {
  }

  // tslint:disable-next-line:typedef
  ngDoBootstrap() {
   const weathercomponent = createCustomElement(WeatherComponent, {injector: this.injector});
   customElements.define('wc-weather', weathercomponent);
  }
}

// import { NgModule,Injector } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {HttpClientModule} from '@angular/common/http';

// //import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';
// import { WeatherComponent } from './weather/weather.component';

// @NgModule({
//   declarations: [
//     WeatherComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule
   
//   ],
//   providers: [],
//   bootstrap: [WeatherComponent] 
// })
// export class AppModule { 
//   constructor(
//         private injector: Injector
//       ) {
//       }
// }
