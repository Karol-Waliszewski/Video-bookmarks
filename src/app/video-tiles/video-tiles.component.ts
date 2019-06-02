import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "video-tiles",
  templateUrl: "./video-tiles.component.html",
  styleUrls: ["./video-tiles.component.scss"]
})
export class VideoTilesComponent {
  @Input() videos;
  @Output() onDelete = new EventEmitter();
  @Output() onFavourite = new EventEmitter();

  constructor() {}
}
