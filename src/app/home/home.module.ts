import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import Swiper from 'swiper';


@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers:[Swiper],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
