import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Video } from "../interfaces/video";

@Component({
  selector: "video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"]
})
export class VideoListComponent {
  @Input() videos: Array<Video>;
  @Output() onDelete = new EventEmitter();
  @Output() onFavourite = new EventEmitter();
  @Output() onDialog = new EventEmitter();
  constructor() {}
}
