import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  admin = {
    email: '',
    password: ''
  }
  constructor(private adminservice: AdminServiceService,
    private router: Router){}
  ngOnInit(): void {
  
  }
  token:any;
adminLogin(){
  this.adminservice.adminLogin(this.admin)
  .subscribe(
    res=>{
    this.token = res
      localStorage.setItem('token', this.token.myToken)
      this.router.navigate(['/admin'])
    },
    err=>{
      console.log(err)
    }
  )
}
}
