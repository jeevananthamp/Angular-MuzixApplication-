import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TrackService } from "./track.service";
import { HeaderComponent } from "./header/header.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
// import { MatButtonModule, MatCheckboxModule } from "@angular/material";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import "hammerjs";

@NgModule({
  declarations: [AppComponent, HeaderComponent, WishlistComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
    // MatButtonModule,
    // MatCheckboxModule,
    // BrowserAnimationsModule
  ],
  providers: [TrackService, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
