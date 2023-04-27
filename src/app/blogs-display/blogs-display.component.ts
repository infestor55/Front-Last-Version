import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-blogs-display',
  templateUrl: './blogs-display.component.html',
  styleUrls: ['./blogs-display.component.css']
})
export class BlogsDisplayComponent implements OnInit {

  blogs:any;

constructor(private blogService: BlogsService){}
ngOnInit(): void {
  

  this.blogService.getAll()
    .subscribe(
      res=>{
        this.blogs = res;

      },
      err=>{
        console.log(err)
      }
    )

}
}
