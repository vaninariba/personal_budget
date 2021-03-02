import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public sum : any;
  constructor(public budgetService: BudgetService) { }

  ngOnInit(): void {
    this.getBudget()
    this.getBalance()
  }
  getBudget(){
    this.budgetService.getBudget().subscribe(
      res => {
        this.budgetService.budget = res;
      })}
  getBalance(){
    this.budgetService.getBalance().subscribe(
    res => {
    this.budgetService.sum = res;
    })}
}
