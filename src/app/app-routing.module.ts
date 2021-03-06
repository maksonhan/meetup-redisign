import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/view/main/main.component';
import { EventsComponent } from 'src/app/view/events/events.component';
import { EventComponent } from 'src/app/shared/layouts/event/event.component';
import { SpeakersComponent } from 'src/app/view/speakers/speakers.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'},
  { path: 'events', component: EventsComponent },
  { path: 'events/:eventId', component: EventComponent },
  { path: 'speakers', component: SpeakersComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
