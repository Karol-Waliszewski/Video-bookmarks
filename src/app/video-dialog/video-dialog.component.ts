import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";

interface dialogData {
  url: string;
}

@Component({
  selector: "video-dialog",
  templateUrl: "./video-dialog.component.html",
  styleUrls: ["./video-dialog.component.scss"]
})
export class VideoDialogComponent implements OnInit {
  embed = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: dialogData,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http
      .get(`http://noembed.com/embed?url=${this.data.url}`)
      .subscribe(response=> {
        let html = response['html'];
        this.embed = html.match(/src="([^"]+)"/)[1];
      });
  }
}
