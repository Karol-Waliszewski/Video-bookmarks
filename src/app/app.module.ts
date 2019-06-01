import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Router
import { AppRoutingModule } from "./app-routing.module";

// Angular Material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {MatSelectModule} from '@angular/material/select';

// Components
import { AppComponent } from "./app.component";
import { SearchInputComponent } from "./search-input/search-input.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { VideoListComponent } from "./video-list/video-list.component";
import { VideoListItemComponent } from "./video-list-item/video-list-item.component";
import { VideoCartComponent } from "./video-cart/video-cart.component";
import { VideoTilesComponent } from "./video-tiles/video-tiles.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { VideoViewComponent } from './video-view/video-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    NavigationComponent,
    VideoListComponent,
    VideoListItemComponent,
    VideoCartComponent,
    VideoTilesComponent,
    ToolbarComponent,
    VideoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Angular MateriaL
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
