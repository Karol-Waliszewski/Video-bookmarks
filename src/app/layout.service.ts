import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LayoutService {
  viewType = new BehaviorSubject("tiles");

  constructor() {}

  getViewType() {
    return this.viewType.asObservable();
  }

  updateViewType(type: string) {
    this.viewType.next(type);
  }
}
