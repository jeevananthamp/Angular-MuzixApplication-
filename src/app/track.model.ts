// tslint:disable-next-line: no-namespace
declare namespace namespace {
  export interface Streamable {
    text: string;
    fulltrack: string;
  }

  export interface Artist {
    name: string;
    mbid: string;
    url: string;
  }

  export interface Attr {
    rank: string;
  }

  export interface Track {
    name: string;
    duration: string;
    listeners: string;
    mbid: string;
    url: string;
    streamable: Streamable;
    artist: Artist;
    image: any;
    attr: Attr;
  }

  export interface Attr2 {
    country: string;
    page: string;
    perPage: string;
    totalPages: string;
    total: string;
  }

  export interface Tracks {
    track: Track[];
    attr: Attr2;
  }

  export interface RootObject {
    tracks: Tracks;
  }
}
