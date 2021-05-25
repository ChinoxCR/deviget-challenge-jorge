import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  

  public items:Array<Object> = [
    {id: 1, user: 'user1', time: '1', text: 'lorem ipsum'},
    {id: 2, user: 'user2', time: '2', text: 'lorem ipsum'},
    {id: 3, user: 'user3', time: '3', text: 'lorem ipsum'},
    {id: 4, user: 'user4', time: '4', text: 'lorem ipsum'},
    {id: 5, user: 'user5', time: '5', text: 'lorem ipsum'},
    
];
  
  

  constructor() { }

  ngOnInit(): void {

    
    
  }

}
