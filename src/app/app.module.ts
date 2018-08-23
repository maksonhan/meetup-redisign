import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion';
import {LightboxModule} from 'primeng/lightbox';
import {CarouselModule} from 'primeng/carousel';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './shared/layouts/event/event.component';
import { VideoComponent } from './shared/layouts/event/video/video.component';
import { GalleryComponent } from './shared/layouts/event/gallery/gallery.component';
import { SpeakersEventComponent } from './shared/layouts/event/speakers-event/speakers-event.component';
import { RegistrationComponent } from './shared/layouts/registration/registration.component';
import { SpeakersComponent } from './speakers/speakers.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    EventsComponent,
    EventComponent,
    VideoComponent,
    GalleryComponent,
    SpeakersEventComponent,
    RegistrationComponent,
    SpeakersComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AccordionModule,
    AppRoutingModule,
    LightboxModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
