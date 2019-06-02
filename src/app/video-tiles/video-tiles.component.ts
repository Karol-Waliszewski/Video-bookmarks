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
    this.videoService.getFilter().subscribe(value=>{
      this.getVideos();
    })
  }

  getVideos() {
    this.videos = this.videoService.getVideos();
  }

  deleteVideo(id: string) {
    this.videos = this.videoService.removeVideo(id);
  }

  toggleVideoFavourite(id: string) {
    this.videos = this.videoService.toggleVideoFavourite(id);
  }
}
