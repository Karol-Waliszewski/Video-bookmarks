import { Component, Input, Output, EventEmitter } from "@angular/core";

interface Video {
  title: string;
  thumbnail: string;
  added: Date;
  likes: number;
  views: number;
  id: string;
  isFavourite: boolean;
}
@Component({
  selector: "video-list-item",
  templateUrl: "./video-list-item.component.html",
  styleUrls: ["./video-list-item.component.scss"]
})
export class VideoListItemComponent {
  @Input() video: Video;
  @Output() onDelete = new EventEmitter();
  @Output() onFavourite = new EventEmitter();
  constructor() {}
}
