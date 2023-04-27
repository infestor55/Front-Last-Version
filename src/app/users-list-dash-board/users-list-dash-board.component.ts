import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list-dash-board',
  templateUrl: './users-list-dash-board.component.html',
  styleUrls: ['./users-list-dash-board.component.css']
})
export class UsersListDashBoardComponent implements OnInit{


  users: any;


  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.getAll()
    .subscribe(
      res=>{
        this.users = res;
      },
      err=>{
        console.log(err)
      }
    )
  }
}
