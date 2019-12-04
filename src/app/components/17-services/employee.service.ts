import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
      return [
          { "id": 1, "name" : "andrew", "age": 30 }, 
          { "id": 2, "name" : "sebastina", "age": 15 }, 
          { "id": 3, "name" : "diego", "age": 25 }, 
      ]
  }

}
