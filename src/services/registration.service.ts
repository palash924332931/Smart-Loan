import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any[]> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts");
  }

  public getDataById(id : any): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts/"+id);
  }

  public postData(data: any): Observable<any> {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", data);
  }


  public putData(data : any): Observable<any> {
    return this.http.put("https://jsonplaceholder.typicode.com/posts/"+data.id, data );
    }

  public deleteData(): Observable<any[]> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts");
  }
}
