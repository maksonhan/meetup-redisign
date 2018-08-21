import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/main/main.component';
import { EventsComponent } from 'src/app/events/events.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'events', component: EventsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
