import { Component, OnInit } from "@angular/core";

import { VideoService } from "../services/video.service";

@Component({
  selector: "search-input",
  templateUrl: "./search-input.component.html",
  styleUrls: ["./search-input.component.scss"]
})
export class SearchInputComponent implements OnInit {
  input: string;

  constructor(private videoService: VideoService) {}

  ngOnInit() {}

  addVideo(url: string){
    this.input = "";
    this.videoService.addVideo(url);
  }
}
