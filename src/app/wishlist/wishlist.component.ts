import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { WishlistService } from "../wishlist.service";
@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.css"]
})
export class WishlistComponent implements OnInit {
  private wishlist: any;
  private img: any;
  constructor(private wishlistservice: WishlistService) {}

  ngOnInit() {
    // this.wishlistservice.wishlist$.subscribe(message => {
    //   this.wishlist = message;
    //   this.img = Object.values(this.wishlist[0].image[2])[0];
    //   console.log("wishlist", Object.values(this.wishlist[0].image[2])[0]);
    //   //console.log(this.wishlist);
    // });
    this.wishlistservice.getwishlist().subscribe(data => {
      this.wishlist = data;
      //this.img = Object.values(this.wishlist[0].image[2])[0];
      console.log("wishlist", Object.values(this.wishlist));
      console.log(this.wishlist);
    });
  }
  removeWish(id: any) {
    console.log(id);
    this.wishlistservice.deletewishlist(id).subscribe(data => {
      console.log();
    });
  }
}
