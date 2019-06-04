import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// Router
import { RouterCustomModule } from "./app.routes";

// Pipes
import { IframePipe } from "./pipes/iframe.pipe";

// Angular Material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";

// Components
import { AppComponent } from "./app.component";
import { SearchInputComponent } from "./search-input/search-input.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { VideoListComponent } from "./video-list/video-list.component";
import { VideoListItemComponent } from "./video-list-item/video-list-item.component";
import { VideoCardComponent } from "./video-card/video-card.component";
import { VideoTilesComponent } from "./video-tiles/video-tiles.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { VideoViewComponent } from "./video-view/video-view.component";
import { VideoDialogComponent } from "./video-dialog/video-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    NavigationComponent,
    VideoListComponent,
    VideoListItemComponent,
    VideoCardComponent,
    VideoTilesComponent,
    ToolbarComponent,
    VideoViewComponent,
    VideoDialogComponent,
    IframePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterCustomModule,
    FormsModule,
    // Angular MateriaL
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  entryComponents: [VideoDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
