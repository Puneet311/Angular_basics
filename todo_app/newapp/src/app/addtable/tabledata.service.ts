import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  constructor(private http :HttpClient) {}

  url="http://localhost:3000/myapp/home"
  url1="http://localhost:3000/myapp/addUser"
  url3="http://localhost:3000/myapp/delete/"
  getData():Observable<any>{
    return this.http.get<any>(this.url)
  }
  addUser(body:any):Observable<any>{
    return this.http.post<any>(this.url1,body)
  }

  deleteUser(id:any):Observable<any>{
    return this.http.delete<any>(this.url3+id)
  }
}
