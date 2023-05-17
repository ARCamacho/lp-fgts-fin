import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuestComponent } from './components/quest/quest.component';
import { CardsComponent } from './components/cards/cards.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { QuestsComponent } from './components/quests/quests.component';
import { DuvidasComponent } from './components/duvidas/duvidas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import { LoadComponent } from './components/load/load.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DuviComponent } from './duvi/duvi.component';
import { GtagModule } from 'angular-gtag';
import { ActivatedRoute, Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    QuestComponent,
    CardsComponent,
    TutorialComponent,
    QuestsComponent,
    DuvidasComponent,
    LoadComponent,
    DuviComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxCleaveDirectiveModule,
    CarouselModule.forRoot(),
    GtagModule.forRoot({ trackingId: 'G-W3H8QXYP6G', trackPageviews: true })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private route: ActivatedRoute, private router: Router) { }
 }
