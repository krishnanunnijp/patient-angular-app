import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addPatient=(value:any)=>{
    return this.http.post("http://localhost:8080/add",value)
  }
  fetchPatient=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  searchPatient=(value:any)=>{
    return this.http.post("http://localhost:8080/search",value)
  }
  deletePatient=(value:any)=>{
    return this.http.post("http://localhost:8080/delete",value)
  }
}
