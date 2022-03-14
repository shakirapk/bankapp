import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankHomeComponent } from './bank-home/bank-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; //register stmnt import cheythe
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
    path:'bank-home',component:BankHomeComponent
  },
  // loginte path localhost/4200 alle athondaann empty string koduthe.
  {
    path:'',component:LoginComponent
  },
  // register component frst create aakki ennitt aa pg nte path first set cheythu,import stmnt include cheythu.
  {
    path:'register', component:RegisterComponent    
  },
  {
    path:'transaction', component:TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
