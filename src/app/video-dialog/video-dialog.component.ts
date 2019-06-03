import { Component, Inject } from "@angular/core";
import {  MAT_DIALOG_DATA } from "@angular/material/dialog";

interface dialogData {
  url: string;
}

@Component({
  selector: "video-dialog",
  templateUrl: "./video-dialog.component.html",
  styleUrls: ["./video-dialog.component.scss"]
})
export class VideoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: dialogData) {}
}
