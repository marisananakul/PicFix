import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { CameraPage } from '../camera/camera';
import { FormPage } from '../form/form';
import { ProfilePage } from '../profile/profile';

/* DEPRECATED, APP NO LONGER USES TABS */
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  tab4Root: any = CameraPage;
  tab5Root: any = FormPage;
  tab6Root: any = ProfilePage;

  constructor() {

  }
}
