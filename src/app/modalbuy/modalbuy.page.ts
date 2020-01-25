import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modalbuy',
  templateUrl: './modalbuy.page.html',
  styleUrls: ['./modalbuy.page.scss'],
})
export class ModalbuyPage implements OnInit {

  chfAmnt: number;
  price: number;
  unit: number = 0;

  constructor(public modalCtrl: ModalController, navParams: NavParams) {
    
    this.price = navParams.get('price')
    this.unit = navParams.get('unit')
    console.log('price is '+this.price)
    console.log('unit is '+this.unit)

    this.chfAmnt = this.price * this.unit
   }

  ngOnInit() {
  }

  valueChanged(value) {
    this.chfAmnt = this.price * value
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

  preview() {
    this.modalCtrl.dismiss({
      'total': this.chfAmnt,
      'unit': this.unit
    }) 
  }

}
