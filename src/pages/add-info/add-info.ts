import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GlobalVars } from '../../providers/global-vars';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';


declare var google;




/*
  Generated class for the AddInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-info',
  templateUrl: 'add-info.html'
})
export class AddInfoPage {
 	pushPage;
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public gVars: GlobalVars, public geolocation: Geolocation, public alertCtrl: AlertController) {
  		this.pushPage = AddInfoPage;
  }

  ionViewDidLoad(){
    var previewImage = document.getElementById('formPicture2') as HTMLImageElement;

    var report = this.gVars.getCurrentReport();
    previewImage.src = report.images;

    this.loadMap();

  }

  loadMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    }, (err) => {
      console.log(err);
    });
  }



shareReport() {
  this.showSubmitAlert();
	this.navCtrl.push(HomePage, {
    param1: 'submittedReport'

  });

}

addMarker(){

  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

  let content = "<h4>Information!</h4>";

  this.addInfoWindow(marker, content);

}

addInfoWindow(marker, content){

  let infoWindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });

}


  showSubmitAlert() {
    let alert = this.alertCtrl.create({
      title: 'Thank You!',
      subTitle: 'Your report has been submitted!',
      buttons: ['OK']
    });
    alert.present();
  }
}
