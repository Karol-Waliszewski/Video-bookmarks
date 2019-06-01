import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class VideoService {
  videos = [];

  constructor(private http: HttpClient) {}

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
      .get(`http://www.youtube.com/oembed?url=${url}&format=json`)
      .subscribe(data => {
        let video = data[0];
        let likes = Math.round(Math.random() * 100);
        let views = Math.round(Math.random() * 10000) + likes;

        this.videos.push({
          title: video.title,
          thumbnail: video.thumbnail_url,
          likes,
          views,
          added: Date.now()
        });
      });
  }

  getVimeoVideoInfo(id: string) {
    this.http
      .get(`https://vimeo.com/api/v2/video/${id}.json`)
      .subscribe(data => {
        let video = data[0];
        this.videos.push({
          title: video.title,
          thumbnail: video.thumbnail_large,
          likes: video.stats_number_of_likes,
          views: video.stats_number_of_plays,
          added: Date.now()
        });
      });
  }
}
