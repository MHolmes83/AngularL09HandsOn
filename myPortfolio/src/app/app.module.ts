import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './modules/skills/components/skills/skills.component';
import { SkillsService } from './modules/skills/services/skills.service';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { ContactsService } from './shared/services/contacts.service';
import { GreetingComponent } from './shared/components/greeting/greeting.component';
import { MessageFormComponent } from './shared/components/message-form/message-form.component';
import { FavoritePlacesComponent } from './modules/places/components/favorite-places/favorite-places.component';
import { PlacesService } from './modules/places/services/places.service';
import { PlaceFormComponent } from './shared/place-form/place-form.component';
import { GoalsComponent } from './shared/components/goals/goals.component';
import { GoalsService } from './shared/services/goals.service';
import { HobbiesComponent } from './shared/components/hobbies/hobbies.component';
import { HobbiesService } from './shared/services/hobbies.service';
import { MoviesModule } from './modules/movies/movies.module';
import { MusicModule } from './modules/music/music.module';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactsComponent,
    GreetingComponent,
    MessageFormComponent,
    FavoritePlacesComponent,
    PlaceFormComponent,
    GoalsComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MoviesModule,
    MusicModule
  ],
  providers: [
    SkillsService,
    PlacesService,
    ContactsService,
    HobbiesService,
    GoalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
