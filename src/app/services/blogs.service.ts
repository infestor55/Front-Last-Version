import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) { }

url = 'http://localhost:8080/blog/'
  createBlog(blog: any){
    return this.http.post(this.url + 'ajout', blog)
  }

  getAll(){
    return this.http.get(this.url + 'all');
  }

}
