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
  selector: "video-card",
  templateUrl: "./video-card.component.html",
  styleUrls: ["./video-card.component.scss"]
})
export class VideoCardComponent {
  @Input() video: Video;
  @Output() onDelete = new EventEmitter();
  @Output() onFavourite = new EventEmitter();

  constructor() {}
}
