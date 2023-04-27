import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { AdminServiceService } from '../services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-dashboard',
  templateUrl: './blog-dashboard.component.html',
  styleUrls: ['./blog-dashboard.component.css']
})
export class BlogDashboardComponent implements OnInit{
  blog: any = {
    title:'',
    content:'',
    description:''
  }



  image: any;
  select(e: any){
    this.image = e.target.files[0]
  }
  constructor(private blogservice: BlogsService,
              private router: Router){}
  ngOnInit(): void {
    
  }
  create(){
    let fd = new FormData()
    fd.append('title', this.blog.title)
    fd.append('content', this.blog.content)
    fd.append('description', this.blog.description)
    fd.append('image', this.image)
    this.blogservice.createBlog(fd)
    .subscribe(
      res=>{
        this.router.navigate(['/home'])
      },
      err=>{
        console.log(err)
      }
    )

  }
}
