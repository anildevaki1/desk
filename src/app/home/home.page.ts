import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  //swiperModules = [IonicSlides];
  swiper?: Swiper;

  images = [
    'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    'https://images.unsplash.com/photo-1488229297570-58520851e868',
  ];

  constructor() {}
 // swiper?:Swiper;

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1, // Adjust this value
      slidesPerGroup: 1, // Adjust this value
      loop: true, // Enable loop mode if needed
      // Other configurations...
    });
  }

  // next() {
  //   this.swiper?.slideNext();
  // }
 
  // prev() {
  //   this.swiper?.slidePrev();
  // }


}
