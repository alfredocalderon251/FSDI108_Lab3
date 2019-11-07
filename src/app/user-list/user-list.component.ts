import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private data:DataService) {
    //read data from service
    //data.getAllUsers();
    console.log("There are ",data.getAllUsers());
   }

  ngOnInit() {
  }

}
