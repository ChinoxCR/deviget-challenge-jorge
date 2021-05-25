import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() parentData;
  @Input() title;
  @Input() author;
  @Input() time;
  @Input() img_path

  
  

  constructor() { }

  ngOnInit(): void {
    //console.log("This is the parent data", this.parentData);
    
  }

}
