import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router
import { AppRoutingModule } from './app-routing.module';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

// Components
import { AppComponent } from './app.component';
import { SearchInputComponent } from "./search-input/search-input.component";
import { NavigationComponent } from './navigation/navigation.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { VideoCartComponent } from './video-cart/video-cart.component';
import { VideoTilesComponent } from './video-tiles/video-tiles.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    NavigationComponent,
    VideoListComponent,
    VideoListItemComponent,
    VideoCartComponent,
    VideoTilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Angular MateriaL
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
