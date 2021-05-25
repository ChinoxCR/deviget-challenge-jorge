import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: '[app-items-list]',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  data: string;
  author: string;
  title: string;
  img_path: string;
  time: string;
  authorToSend= [];
  loadComponent= false;
  
  
  posts: string;

  constructor(private postService: PostService) { 
    
  }
  
  ngOnInit(): void {
      this.postService.getPosts().subscribe((obj) => this.posts = obj.data.children);
  }

   
   openPost() {
     console.log("description clicked!");
   }

   loadPostComponent(info: any) {
      this.loadComponent = true;
      this.author = info.author;
      this.img_path = info.thumbnail;
      this.title = info.title;
      this.time = info.created_utc;
    }

    removeItem(info: any, index: any) {
      console.log("antes" + info);
      info.splice(index, 1);
      console.log("despues" +info);
    }

    removeAllItems(info: any) {
      
      info.splice(0, 100);
      
    }
   
  }
