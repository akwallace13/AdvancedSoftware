import { AfterContentChecked, Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {

  accounts: any[] = [];
  bannerConfig: SwiperOptions;
  featureConfig: SwiperOptions;
  features: any[] = [];
  transactions: any[] = [];

  constructor() { }

  ngOnInit() {
    this.accounts = [
      { id: 1, acc_no: '12345678910', balance: '2400' },
      { id: 2, acc_no: '10987654321', balance: '4500' },
      { id: 3, acc_no: '54632198756', balance: '3600' }
    ];
    this.features = [
      { id: 1, color: 'tertiary', icon: 'paper-plane', name: 'Send' },
      { id: 2, color: 'white', icon: 'open-outline', name: 'Request' },
      { id: 3, color: 'success', icon: 'add-circle', name: 'Top-up' },
      { id: 4, color: 'light', icon: 'newspaper', name: 'Bills' },
      { id: 5, color: 'warning', icon: 'card', name: 'Cards' },
    ];
    this.transactions = [
      { id: 1, to: 'BJC', date: '2024-12-12', amount: 1300 },
      { id: 2, to: 'Mercy', date: '2023-12-14', amount: 700 },
      { id: 3, to: 'Dierbergs', date: '2023-12-18', amount: -350 },
      { id: 4, to: 'Jane Doe', date: '2023-12-09', amount: 100 },
      { id: 5, to: 'Shell', date: '2023-12-13', amount: -800 },
    ];
  }

  ngAfterContentChecked() {
    this.bannerConfig = {
      slidesPerView: 1,
      pagination: { clickable: true }
    };
    this.featureConfig = {
      slidesPerView: 3.5,
    };
  }

}
