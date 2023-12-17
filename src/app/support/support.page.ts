import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }



Back(){
  this.navCtrl.back();
}

}