import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmploy } from './interfaces/Employ.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetEmployesService {
  private baserl = "https://localhost:7043/api/Employe";
  constructor(private http : HttpClient) { }

  getAllEmployes(){
    return this.http.get<IEmploy[]>(this.baserl);
  }

  AddEmploye(Employe:IEmploy){
    return this.http.post(this.baserl,Employe);
  }

  DeleteEmploye(id:any){
    return this.http.delete(`${this.baserl}/${id}`)
  }

  getdatabyid(id:any){
    return this.http.get<IEmploy>(`${this.baserl}/${id}`)
  }

  Updatedatabyid(id:any , Employ:IEmploy){
    return this.http.put(`${this.baserl}/${id}`,Employ)
  }
}
