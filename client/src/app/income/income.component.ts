import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service'
import{ Budget } from '../models/Budget'
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  constructor(public budgetService: BudgetService) { }

  ngOnInit(): void {
    this.getIncome()
  }
  getIncome(){
    this.budgetService.getIncome().subscribe(
      res => {
        this.budgetService.budget = res;
      })
}
editBudget(budget:Budget){
  this.budgetService.selectedBudget= budget;
}


deleteBudget(id:number){
  this.budgetService.deleteBudget(id).subscribe(
    (res) => {this.getIncome()}
  )}
}