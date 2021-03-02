import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public budgetService: BudgetService) { }

  ngOnInit(): void {
 
  }

  addBudget(form: NgForm){
    this.budgetService.addBudget(form.value).subscribe(
     res => {
      form.reset()
     })}
}
