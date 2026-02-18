import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { StoryComponent } from './pages/story/story.component';
import { TravelComponent } from './pages/travel/travel.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'story', component: StoryComponent },
  { path: 'venue', component: TravelComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
