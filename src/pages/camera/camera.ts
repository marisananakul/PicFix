import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CameraConfirmPage } from '../camera-confirm/camera-confirm';



import { GlobalVars } from '../../providers/global-vars'

declare var CameraPreview: any;


@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public gVars: GlobalVars) {}

  /*Called first time page is opened*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');

    CameraPreview.startCamera({
    	x: 0,
    	y: 0,
    	width: window.screen.width,
    	height: window.screen.height - 150,
    	camera: "front",
    	toBack: false,
    	tapPhoto: false,
    	previewDrag: false
    });


//temp location, move pls
    this.gVars.createCurrentReport()

  }

 /*Called every time view is closed*/
  ionViewWillLeave() {
  	CameraPreview.hide();
  }


 /*Called every time view is opened*/
  ionViewWillEnter() {
 	CameraPreview.show();
  }


  switchCamera() {
  	CameraPreview.switchCamera();
  }

  takePicture(){
  	var _this = this;
    CameraPreview.takePicture(function(imgData){

    	//save pic to local storage
     	var pic = 'data:image/jpeg;base64,' + imgData;

     	var report = _this.gVars.getCurrentReport();
      //console.log(report)


     	report.images = pic;

     	_this.gVars.updateCurrentReport(report);


		//console.log(report.images);

     	//launch the camera confirm page
     	_this.navCtrl.push(CameraConfirmPage, {});

    }



    );
    //need to get Image out of ^ and into push


  }

  toggleFlash(){
  		console.log("toggling flash!");
  		/*this.navCtrl.push(CameraConfirmPage, {
  			picture: pictureData
  		});*/


  }

  createReportFile() {


  }


}
