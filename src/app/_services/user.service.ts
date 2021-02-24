import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Banks } from '../_models/banks';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
url ="http://localhost:52801/api/Banks/";
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get("http://localhost:52801/api/Banks");
  }
  postData(data:Banks): Observable<Banks>
  {
     const httpOptions = {headers : new HttpHeaders({'content-Type' :'application/json'})};
     let result = this.http.post<any>(this.url,data,httpOptions);
     return result;
  }

  Delete(id)
  {
    return this.http.delete(this.url+id).subscribe(data=>{console.log(data)});
  }
}
