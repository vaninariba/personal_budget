import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncomeComponent} from './income/income.component';
import {ExpenseComponent} from './expense/expense.component';
import { HomeComponent } from "./home/home.component";
import { AddComponent } from "./add/add.component";



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'income', component: IncomeComponent},
  {path: 'expense', component: ExpenseComponent},
  {path: 'add', component: AddComponent},

    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
