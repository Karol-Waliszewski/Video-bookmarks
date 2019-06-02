import { Component, OnInit } from "@angular/core";
import { LayoutService } from "../layout.service";
import { VideoService } from "../video.service";

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
    private layoutService: LayoutService
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
    this.videoService.removeVideo(id);
  }

  toggleVideoFavourite(id: string) {
    this.videoService.toggleVideoFavourite(id);
  }
}
