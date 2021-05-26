import { Component, OnInit, ElementRef } from '@angular/core';
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

   
  

   loadPostComponent(info: any, index: any) {
    var el = document.querySelector(`div[data-index="${index}"]`);
    console.log(el);
    el.remove(); // Removes the div with the 'div-02' id
    
    
      
      this.loadComponent = true;
      this.author = info.author;
      this.img_path = info.thumbnail;
      this.title = info.title;
      this.time = info.created_utc;
    }

    removeItem(info: any, index: any) {
      
      info.splice(index, 1);
    
    }

    removeAllItems(info: any) {
      
      info.splice(0, 100);
      
    }
   
  }
