import { Component, OnInit } from "@angular/core";

import { VideoService } from "../video.service";

@Component({
  selector: "video-tiles",
  templateUrl: "./video-tiles.component.html",
  styleUrls: ["./video-tiles.component.scss"]
})
export class VideoTilesComponent implements OnInit {
  videos = [];
  newestFirst = true;

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videoService.getVideos().subscribe(videos => {
      this.videos = videos;
      this.sortVideos();
    });
    this.videoService.getSorting().subscribe(newestFirst => {
      this.newestFirst = newestFirst
      this.sortVideos();
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
