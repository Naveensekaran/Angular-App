import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private getURL="https://jsonplaceholder.typicode.com/users";
  private addURL="http://localhost:8080/addemployees";
  private delURL="http://localhost:8080/deleteemployee";
  private getbyidURL="http://localhost:8080/getemployeebyid";
  private updURL="http://localhost:8080/updateemployee";


  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.getURL}`);
  }

  createEmployee(employee:Employee) : Observable<Object>{
    return this.httpClient.post(`${this.addURL}`, employee);
  }

  deleteEmployee(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.delURL}/${id}`);
  }

  getEmployeeById(id:number) : Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.getbyidURL}/${id}`);

  }

  updateEmployee(id:number, employee: Employee) : Observable<Object>{
    return this.httpClient.put(`${this.updURL}/${id}`, employee);
  }
  }
