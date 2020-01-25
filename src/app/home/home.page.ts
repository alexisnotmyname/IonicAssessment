import { Component } from '@angular/core';
import { JsonService } from '../services/json.service';
import { ModalController } from '@ionic/angular';
import { ModalbuyPage } from '../modalbuy/modalbuy.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  crypto: any;
  totalAmount: number;
  unit: number = 1;
  

  constructor(private jsonService: JsonService, public modalController: ModalController) {
    this.jsonService.getJSON().then(data => {
      this.crypto = data
      console.log(data)
      
      this.totalAmount = data["pricing"]["price"] * this.unit
    })
  }

  async presentModal() {
    console.log('present modal')
    const modal = await this.modalController.create({
      component: ModalbuyPage,
      componentProps: {
        'price': this.crypto['pricing']['price'],
        'unit': this.unit
      },
      cssClass: 'half-modal'
    });

    modal.onDidDismiss()
      .then((data) => {
        // const user = data['data']; // Here's your selected user!
        console.log(data['data'])
        if(data['data']) {
          this.unit = data['data']['unit']
          this.totalAmount = data['data']['total']
        } 
    });
    return await modal.present();
  }

  ngOnInit() {
    
  }
}
