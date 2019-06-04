import { Component, Input, Output, EventEmitter } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Video } from "../interfaces/video";

@Component({
  selector: "video-tiles",
  templateUrl: "./video-tiles.component.html",
  styleUrls: ["./video-tiles.component.scss"]
})
export class VideoTilesComponent {
  isSmallScreen: boolean;
  @Input() videos: Array<Video>;
  @Output() onDelete = new EventEmitter();
  @Output() onFavourite = new EventEmitter();
  @Output() onDialog = new EventEmitter();
  constructor(private breakpoints: BreakpointObserver) {
    this.isSmallScreen = this.breakpoints.isMatched('(max-width: 1100px)');
  }
}
