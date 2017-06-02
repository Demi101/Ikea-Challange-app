import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Event1Page } from '../event1/event1';
/*
  Generated class for the Event1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

	event1Page = Event1Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
