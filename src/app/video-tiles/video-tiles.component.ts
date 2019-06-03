import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Video } from "../interfaces/video";

@Component({
  selector: "video-tiles",
  templateUrl: "./video-tiles.component.html",
  styleUrls: ["./video-tiles.component.scss"]
})
export class VideoTilesComponent {
  @Input() videos: Array<Video>;
  @Output() onDelete = new EventEmitter();
  @Output() onFavourite = new EventEmitter();
  @Output() onDialog = new EventEmitter();
  constructor() {}
}
