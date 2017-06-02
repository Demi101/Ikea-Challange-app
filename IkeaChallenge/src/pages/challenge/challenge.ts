import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import {Challenge1Page} from '../challenge1/challenge1';
import {Challenge2Page} from '../challenge2/challenge2';
import {Challenge3Page} from '../challenge3/challenge3';
import {Challenge4Page} from '../challenge4/challenge4';
import {Challenge5Page} from '../challenge5/challenge5';
import {Challenge6Page} from '../challenge6/challenge6';

/*
  Generated class for the Challenge page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-challenge',
  templateUrl: 'challenge.html'
})
export class ChallengePage {

	challenge1Page = Challenge1Page;
	challenge2Page = Challenge2Page;
	challenge3Page = Challenge3Page;
	challenge4Page = Challenge4Page;
	challenge5Page = Challenge5Page;
	challenge6Page = Challenge6Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChallengePage');
  }

}
