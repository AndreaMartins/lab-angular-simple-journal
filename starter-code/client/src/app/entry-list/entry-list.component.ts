import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from './../api-handler.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})

export class EntryListComponent implements OnInit {
  entryList;
  constructor(private api: ApiHandlerService){}


  ngOnInit() {
    this.api.getList().subscribe((entries)=>{
      this.entryList = entries;
    });
  }
}
