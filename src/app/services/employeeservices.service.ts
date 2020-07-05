import { Injectable } from '@angular/core';
import { HttpClient}    from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesService {

  constructor( private http:HttpClient) { }
  allEmployeeDetails():Observable<any>{
    // const url=environment.url+'employees'
    const url=environment.url+'employees'
    return this.http.get(url);
  }

allEmployeePost():Observable<any>{
  const url2=environment.url1+'comments/id'
  return this.http.get(url2);
}
}