import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from './../api-handler.service'
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers: [ApiHandlerService]
})
export class EntryComponent implements OnInit {
  entry: Object ={};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiHandlerService,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.getEntrydetails(params["id"]);
    })
  }

  getEntrydetails(id){
    this.api.getEntry(id)
    .subscribe((entry)=>{
      this.entry=entry;
    })
  }

}
