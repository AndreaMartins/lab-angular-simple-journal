import { Injectable } from '@angular/core';
import{ Http} from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class ApiHandlerService {
  BASE_URL: string= "http://localhost:3000";
  constructor(private http:Http) { }
 getList(){
   return this.http.get(`${this.BASE_URL}/api/journal-entries`).map((res)=>res.json());
 }

 getEntry(id){
   return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`).map((res)=>res.json());
 }

 createEntry(entry){
   return this.http.post(`${this.BASE_URL}/api/journal-entries`,entry).map((res)=>res.json());
 }
}
