import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor( public userservice: UserService,
              private router: Router){}

 ngOnInit(): void {
   
 }
 logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
 }
}
