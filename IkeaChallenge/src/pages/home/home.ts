import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Level1Page} from '../level1/level1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	level1Page = Level1Page;

  constructor(public navCtrl: NavController) {

  }

}
