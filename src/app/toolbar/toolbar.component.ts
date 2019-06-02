import { Component, OnInit } from "@angular/core";
import { VideoService } from "../video.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent implements OnInit {
  checked = false;
  sortedBy = "new";

  constructor(private videoService: VideoService) {}

  ngOnInit() {}

  isChecked(e) {
    this.checked = e.checked;
    this.videoService.updateFilter(this.checked);
  }
}
