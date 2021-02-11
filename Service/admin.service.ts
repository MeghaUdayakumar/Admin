import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminModel } from 'src/app/app.component';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly URL:string="https://localhost:5000/api/outlet"

  constructor(private http:HttpClient) { }

  Create(data:AdminModel):Observable<AdminModel>
  {
    return this.http.post<AdminModel>(this.URL, data);
  }

  Update(data:AdminModel):Observable<AdminModel>
  {
    return this.http.put<AdminModel>(this.URL, data);
  }
  GetAll():Observable<AdminModel[]>
  {
    return this.http.get<AdminModel[]>(this.URL);
  }

  GetOne(id:any):Observable<AdminModel[]>
  {
    return this.http.get<AdminModel[]>(this.URL + "/" + id);
  }
  Delete(id:any):Observable<AdminModel>
  {
    return this.http.delete<AdminModel>(this.URL + "/" + id);
  }
}
