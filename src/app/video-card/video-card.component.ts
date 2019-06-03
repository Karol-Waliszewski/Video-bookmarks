import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Video } from "../interfaces/video";

@Component({
  selector: "video-card",
  templateUrl: "./video-card.component.html",
  styleUrls: ["./video-card.component.scss"]
})
export class VideoCardComponent {
  @Input() video: Video;
  @Output() onDelete = new EventEmitter();
  @Output() onFavourite = new EventEmitter();
  @Output() onDialog = new EventEmitter();

  constructor() {}
}
