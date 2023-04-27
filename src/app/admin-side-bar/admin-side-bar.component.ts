import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent implements OnInit {
  constructor( public adminservice: AdminServiceService,
    private router: Router){}

ngOnInit(): void {

}
logout(){
localStorage.removeItem('token');
this.router.navigate(['/admin-login']);
}
}
