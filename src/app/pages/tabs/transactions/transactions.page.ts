import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  allTransactions: any[] = [];
  transactions: any[] = [];
  segmentValue = 'in';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) { }

  ngOnInit() {
    this.allTransactions = [
      { id: 1, to: 'BJC', date: '2023-12-11', amount: 1500 },
      { id: 2, to: 'Grandma', date: '2023-12-13', amount: 70 },
      { id: 3, to: 'Discover', date: '2023-12-15', amount: -850 },
      { id: 4, to: 'Mercy', date: '2023-12-16', amount: 1000 },
      { id: 5, to: 'Sally Mae', date: '2023-12-18', amount: -350 },
    ];
    this.filterTransactions();
  }

  filterTransactions() {
    if(this.segmentValue == 'in') {
      this.transactions = this.allTransactions.filter(x => x.amount >= 0);
    } else {
      this.transactions = this.allTransactions.filter(x => x.amount < 0);
    }
  }

  segmentChanged(event) {
    console.log(event);
    this.segmentValue = event.detail.value;
    this.filterTransactions();
  }


  AddTransaction(){
    console.log("Transaction Added", this.transactions);
    const prompt = this.alertCtrl.create({
      message: "Enter Transaction",
      inputs: [
        {name: 'to',
        placeholder: 'Description'},
        {name: 'date',
        placeholder: 'Date'},
        {name: 'amount',
        placeholder: 'Amount'},
      ],
      buttons: [
        {text: 'Cancel',
        handler: data => {
          console.log('Transaction Cancelled.');
        }},
        {text: 'Save',
        handler: transaction => {
          console.log('Transaction Saved.', transaction);
          this.transactions.push(transaction);
        }}
      ]
    }).then(res => res.present());   
  }
}



