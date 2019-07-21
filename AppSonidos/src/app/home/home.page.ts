import { animal } from '../../interface/animal.interface';
import { ANIMALES } from './../../Data/data.animales';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  animales:any[]=[];
  constructor() {
    this.animales=ANIMALES.slice(0);
  }


}
