import { Component, OnInit } from "@angular/core";
import { TrackService } from "../track.service";
import { WishlistService } from "../wishlist.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  private wish: any = [];
  public tracks: namespace.Track[];
  public imgpath;
  constructor(
    private trackservice: TrackService,
    private wishlistservice: WishlistService
  ) {}

  ngOnInit() {
    // onSelected(val: any) {
    //   this.country = val;
    //   console.log(this.country);
    //   console.log(val);
    // }
  }
  getIndiaTracks() {
    this.trackservice.getIndiaTracks().subscribe(data => {
      this.tracks = data.tracks.track;
      this.imgpath = Object.values(this.tracks[0].image[2])[0];
      console.log(this.tracks);
      // console.log(this.tracks[0].image[1].size);
      console.log(Object.values(this.tracks[0].image[3])[0]);
    });
    console.log(this.tracks);
  }
  getSpainTracks() {
    this.trackservice.getSpainTracks().subscribe(data => {
      this.tracks = data.tracks.track;
      this.imgpath = Object.values(this.tracks[0].image[2])[0];
      console.log(this.tracks);
      // console.log(this.tracks[0].image[1].size);
      // console.log(Object.values(this.tracks[0].image[3])[0]);
    });
    //console.log(this.tracks);
  }
  addToWish(item) {
    if (!this.wish.includes(item)) {
      this.wish.push(item);

      this.wishlistservice.sendMessage(this.wish).subscribe(data => {
        console.log();
      });
      // console.log("testing" + this.wish[0][0]);
    }
  }
}
