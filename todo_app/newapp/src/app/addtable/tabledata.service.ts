import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  constructor(private http :HttpClient) {}

  url="/myapp/home"
  url1="/myapp/addUser"
  url2="/myapp/modify/"
  url3="/myapp/delete/"
  getData():Observable<any>{
    return this.http.get<any>(this.url)
  }
  addUser(body:any):Observable<any>{
    return this.http.post<any>(this.url1,body)
  }

  deleteUser(id:any):Observable<any>{
    return this.http.delete<any>(this.url3+id)
  }

  updateUser(id:any,body:any):Observable<any>{
    return this.http.put<any>(this.url2+id,body)
  }
}
