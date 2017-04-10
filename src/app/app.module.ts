import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FormPage } from '../pages/form/form';
import { CategoriesPage } from '../pages/categories/categories';

import { CameraPage } from '../pages/camera/camera';
import { CameraConfirmPage } from '../pages/camera-confirm/camera-confirm';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GlobalVars } from '../providers/global-vars';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CameraPage,
    CameraConfirmPage,
    TabsPage,
    FormPage,
    CategoriesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CameraPage,
    CameraConfirmPage,
    TabsPage,
    FormPage,
    CategoriesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalVars,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
