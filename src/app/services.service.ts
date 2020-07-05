import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  
  getAllPosts():Observable<any>{
    const url=environment.url1+'posts'
    return this.http.get(url);
  
   
  }
}
