import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

const routes: Routes = [
  {
    path: "",
    component: HeaderComponent
  },
  {
    path: "wishlist",
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
