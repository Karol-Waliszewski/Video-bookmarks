import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.scss"]
})
export class VideoListComponent {
  @Input() videos;
  @Output() onDelete = new EventEmitter();
  @Output() onFavourite = new EventEmitter();
  constructor() {}
}
