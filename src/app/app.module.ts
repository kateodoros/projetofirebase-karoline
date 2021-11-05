import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AuthService} from './auth.service';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {FirelistComponent} from './firelist/firelist.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '' , component: IndexComponent},
      {path: 'firelist', component: FirelistComponent },

    ]),
    AngularFireModule.initializeApp(
        {
          apiKey: "AIzaSyCkveto1OyhbJJyf_VpQ7P7MGPrF0nRwlE",
          authDomain: "angularlist-f1309.firebaseapp.com",
          projectId: "angularlist-f1309",
          storageBucket: "angularlist-f1309.appspot.com",
          messagingSenderId: "641339856790",
          appId: "1:641339856790:web:c10c3e4a60954e99752fb7",
          measurementId: "G-B57EHK51LM"
        }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent, HelloComponent, IndexComponent, FirelistComponent],
  bootstrap:    [ AppComponent ],
  providers: [ AuthService ]
})
export class AppModule { }