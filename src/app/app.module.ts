import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion';
import {LightboxModule} from 'primeng/lightbox';

import { AppComponent } from './app.component';
import { MainComponent } from './view/main/main.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { EventsComponent } from './view/events/events.component';
import { EventComponent } from './shared/layouts/event/event.component';
import { VideoComponent } from './shared/layouts/event/video/video.component';
import { GalleryComponent } from './shared/layouts/event/gallery/gallery.component';
import { SpeakersEventComponent } from './shared/layouts/event/speakers-event/speakers-event.component';
import { RegistrationComponent } from './shared/layouts/registration/registration.component';
import { SpeakersComponent } from './view/speakers/speakers.component';
import { ParticlesModule } from 'angular-particle';
import { ParticleComponent } from './common/particle/particle.component';
import { ApiService } from 'src/app/core/utils/api/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomErrorHandler } from 'src/app/core/utils/errorhandler/errorhandler';


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
    SpeakersComponent,
    ParticleComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    AppRoutingModule,
    LightboxModule,
    ParticlesModule,
  ],
  providers: [
    ApiService,
    {provide: ErrorHandler, useClass: CustomErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
