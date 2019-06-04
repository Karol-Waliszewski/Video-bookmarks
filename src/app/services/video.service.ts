import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { v4 as uuid } from "uuid";
import { Video } from "../interfaces/video";

interface youtubeResponse {
  title?: string;
  thumbnail_url?: string;
  url?: string;
}

@Injectable({
  providedIn: "root"
})
export class VideoService {
  private videos = [];
  private onlyFavourites = false;
  private newestVideosFirst = new BehaviorSubject(true);
  private resultVideos = new BehaviorSubject(this.videos);

  constructor(private http: HttpClient) {}

  private returnResultVideos() {
    let result = this.onlyFavourites ? this.getFavourites() : this.videos;
    this.resultVideos.next(result);
  }

  loadDemo() {
    this.http.get("../../assets/videos.json").subscribe(videos => {
      for (let i = 0; i < videos["length"]; i++) {
        this.pushVideo(videos[i]);
      }
    });
  }

  addVideo(input: string) {
    if (input.includes("youtube")) {
      let url = new URL(input);
      this.getYoutubeVideoInfo(url.searchParams.get("v"));
    } else if (input.includes("youtu")) {
      let url = new URL(input);
      this.getYoutubeVideoInfo(url.pathname.slice(1));
    } else if (input.includes("vimeo")) {
      let url = new URL(input);
      this.getVimeoVideoInfo(url.pathname.slice(1));
    }
  }

  getYoutubeVideoInfo(id: string) {
    let url = "https://www.youtube.com/watch?v=" + id;
    this.http
      .get(`https://noembed.com/embed?url=${url}`)
      .subscribe((data: youtubeResponse) => {
        let video = data;
        let likes = Math.round(Math.random() * 1000);
        let views = Math.round(Math.random() * 10000) + likes;

        this.pushVideo({
          title: video.title,
          thumbnail: video.thumbnail_url,
          likes,
          views,
          url: video.url
        });
      });
  }

  getVimeoVideoInfo(id: string) {
    this.http
      .get(`https://vimeo.com/api/v2/video/${id}.json`)
      .subscribe(data => {
        let video = data[0];
        this.pushVideo({
          title: video.title,
          thumbnail: video.thumbnail_large,
          likes: video.stats_number_of_likes,
          views: video.stats_number_of_plays,
          url: video.url
        });
      });
  }

  pushVideo(video: Video) {
    this.videos.push(
      Object.assign(
        {
          id: uuid(),
          isFavourite: false,
          added: Date.now()
        },
        video
      )
    );
    this.returnResultVideos();
  }

  getVideos() {
    return this.resultVideos.asObservable();
  }

  getFavourites() {
    return this.videos.filter(video => video.isFavourite);
  }

  getSorting() {
    return this.newestVideosFirst.asObservable();
  }

  removeVideo(id: string) {
    this.videos = this.videos.filter(video => video.id !== id);
    this.returnResultVideos();
  }

  toggleVideoFavourite(id: string) {
    this.videos = this.videos.map(video => {
      if (video.id !== id) return video;
      else return Object.assign(video, { isFavourite: !video.isFavourite });
    });
    this.returnResultVideos();
  }

  updateFilter(value: boolean) {
    this.onlyFavourites = value;
    this.returnResultVideos();
  }

  updateSorting(value: string) {
    let bool = value === "new" ? true : false;
    this.newestVideosFirst.next(bool);
  }
}
