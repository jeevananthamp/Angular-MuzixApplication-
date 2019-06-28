import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class WishlistService {
  public API = "http://localhost:8080/muzix";
  public CPI = "http://localhost:8080/muzix/track/";

  receiveData: any = [];
  private _wishlistMessage = new BehaviorSubject<any>(this.receiveData);
  wishlist$ = this._wishlistMessage.asObservable();

  constructor(private http: HttpClient) {}

  getwishlist(): Observable<object> {
    //console.log("hi" + this.http.get<any>(`${this.API}` + "/alltracks"));
    return this.http.get<any>(`${this.API}` + "/alltracks");
  }
  sendMessage(message: any) {
    console.log(message[message.length - 1], " hey this is my code");
    return this.http.post<any>(`${this.API}` + "/track", {
      trackname: message[message.length - 1].name,
      trackcomments: message[message.length - 1].artist.name,
      tracklisteners: message[message.length - 1].url
    });
  }
  deletewishlist(id: any): Observable<object> {
    console.log(id + "******");
    return this.http.delete<any>(`${this.CPI}` + `${id}`);
  }
}
