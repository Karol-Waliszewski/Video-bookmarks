import { Component, OnInit } from '@angular/core';
import {LayoutService} from "../layout.service";


@Component({
  selector: 'video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {
  view: string;
  constructor(private layoutService:LayoutService) { }

  ngOnInit() {
    this.layoutService.getViewType().subscribe(view=>{
      this.view = view;
    })
  }

}
