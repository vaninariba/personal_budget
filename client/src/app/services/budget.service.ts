
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Budget } from '../models/Budget';
@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  URI_API = 'http://localhost:3000/api/budget'
  URI_API_BALANCE = 'http://localhost:3000/api/budget/balance'
  URI_API_INCOME= 'http://localhost:3000/api/income'
  URI_API_EXPENSE = 'http://localhost:3000/api/expense'
  selectedBudget: Budget={
    id:0,
    concept:'',
    amount:'',
    date:'',
    type:''

  };
  budget!: Budget[];
  sum!:any;
  constructor(private http: HttpClient ) { 
    
  }
  getBudget(){
    return this.http.get<Budget[]>(this.URI_API)
  }
  getIncome(){
    return this.http.get<Budget[]>(this.URI_API_INCOME)
  }
  getExpense(){
    return this.http.get<Budget[]>(this.URI_API_EXPENSE)
  }
  getBalance(){
    return this.http.get<number>(this.URI_API_BALANCE)
  }
  addBudget(budget: Budget){
    return this.http.post(this.URI_API, budget)
  }
  deleteBudget(id:number){
    return this.http.delete(`${this.URI_API}/${id}`)
  }
   editBudget(budget:Budget){
  return this.http.put(`${this.URI_API}/${budget.id}`, budget)

 }
}
