import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainHttpService {
  httpHeader = {
    // api http header
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {}

  getGroupAMatches() {
    return this.http.get(
      `https://livescore-api.com/api-client/fixtures/matches.json?key=yc01yH9rbqN7lmoO&secret=plR9Cq36OwtxkLBSXBUvj3XvtKCP70Ew&league=962`,
      this.httpHeader
    );
  }
}
