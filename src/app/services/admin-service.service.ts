import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8080/admin/';
  adminLogin(admin: any){
    return this.http.post(this.url + 'admin-login', admin);
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
    if(token){
      return true
    }else{
      return false
    }
   }
}
