import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iemployee } from './interface/employee-interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";
  
  constructor( private http: HttpClient ) { }

  getEmployees(): Observable<Iemployee[]> {
        
        return this.http.get<Iemployee[]>(this._url);
        
        /*
        return [
          { "id": 1, "name" : "andrew", "age": 30 }, 
          { "id": 2, "name" : "sebastina", "age": 15 }, 
          { "id": 3, "name" : "diego", "age": 25 }, 
        ]
        */
    }

}

