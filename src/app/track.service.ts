import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TrackService {
  // tslint:disable-next-line: max-line-length
  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: max-line-length
  private urll =
    "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=3544c70c0ece1d7b98159ae38743e904&format=json";
  private url =
    "http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=india&api_key=3544c70c0ece1d7b98159ae38743e904&format=json";
  constructor(private http: HttpClient) {}
  private temp;
  getIndiaTracks(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  getSpainTracks(): Observable<any> {
    return this.http.get<any>(this.urll);
  }
}
