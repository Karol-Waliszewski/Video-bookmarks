import { RouterModule } from "@angular/router";

// Components
import { VideoViewComponent } from "./video-view/video-view.component";

const ROUTES = [
  { path: "", component: VideoViewComponent },
  { path: ":page", component: VideoViewComponent }
];

export const RouterCustomModule = RouterModule.forRoot(ROUTES);
