import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service'
import{ Budget } from '../models/Budget'

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})

export class ExpenseComponent implements OnInit {
  constructor(public budgetService: BudgetService) { }

  ngOnInit(): void {
    this.getExpense()
  }
  getExpense(){
    this.budgetService.getExpense().subscribe(
      res => {
        this.budgetService.budget = res;
      
      }
    )
}
editBudget(budget:Budget){
  this.budgetService.selectedBudget= budget;

}


deleteBudget(id:number){

  this.budgetService.deleteBudget(id).subscribe(
    (res) => {this.getExpense()}
  )}
}

