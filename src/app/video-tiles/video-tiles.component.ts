import { Component, OnInit } from "@angular/core";

import { VideoService } from "../video.service";

@Component({
  selector: "video-tiles",
  templateUrl: "./video-tiles.component.html",
  styleUrls: ["./video-tiles.component.scss"]
})
export class VideoTilesComponent implements OnInit {
  videos = [];

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videoService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

  deleteVideo(id: string) {
    this.videoService.removeVideo(id);
  }

  toggleVideoFavourite(id: string) {
    this.videoService.toggleVideoFavourite(id);
  }
}
