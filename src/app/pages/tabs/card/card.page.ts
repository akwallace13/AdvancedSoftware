import { Component, OnInit, AfterContentChecked } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit, AfterContentChecked {

  bannerConfig: SwiperOptions;
  cards: any[] = [];

  constructor() { }

  ngOnInit() {
    this.cards = [
      { id: 1, company_img: 'assets/imgs/mastercard.png', card_no: '1234 5678 9101 1120', card_holder: 'Amanda Wallace', exp_date: '08/28' },
      { id: 2, company_img: 'assets/imgs/visa.png', card_no: '1011 9876 5432 1087', card_holder: 'Amanda Wallace', exp_date: '12/29' },
      { id: 3, company_img: 'assets/imgs/mastercard.png', card_no: '1112 1314 1516 1718', card_holder: 'Amanda Wallace', exp_date: '09/24' }
    ];
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 40,
      pagination: { clickable: true }
    };
  }

}
