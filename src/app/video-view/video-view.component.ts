import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { VideoDialogComponent } from "../video-dialog/video-dialog.component";

// Services
import { LayoutService } from "../services/layout.service";
import { VideoService } from "../services/video.service";

@Component({
  selector: "video-view",
  templateUrl: "./video-view.component.html",
  styleUrls: ["./video-view.component.scss"]
})
export class VideoViewComponent implements OnInit {
  view: string;
  videos = [];
  newestFirst = true;
  constructor(
    private videoService: VideoService,
    private layoutService: LayoutService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.videoService.getVideos().subscribe(videos => {
      this.videos = videos;
      this.sortVideos();
    });
    this.videoService.getSorting().subscribe(newestFirst => {
      this.newestFirst = newestFirst;
      this.sortVideos();
    });
    this.layoutService.getViewType().subscribe(view => {
      this.view = view;
    });
  }

  sortVideos() {
    if (this.newestFirst) {
      this.videos = this.videos.sort((a, b) => (a.added < b.added ? 1 : -1));
    } else {
      this.videos = this.videos.sort((a, b) => (a.added > b.added ? 1 : -1));
    }
  }

  deleteVideo(id: string) {
    this.snackBar.open("Video has been removed.", "", { duration: 2500 });
    this.videoService.removeVideo(id);
  }

  toggleVideoFavourite(id: string) {
    this.videoService.toggleVideoFavourite(id);
  }

  openVideoDialog(url: string) {
    this.dialog.open(VideoDialogComponent, {
      maxWidth: "1080px",
      minWidth: "300px",
      maxHeight: "720px",
      width: `${window.innerWidth / 1.5}px`,

      data: { url }
    });
  }
}
