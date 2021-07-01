import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:5000";
  }
  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, payload: object) {
    return this.http.get(`${this.ROOT_URL}/${uri}`, payload);
  }
  put(uri: string, payload: object) {
    return this.http.get(`${this.ROOT_URL}/${uri}`, payload);
  }
  delete(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

}
