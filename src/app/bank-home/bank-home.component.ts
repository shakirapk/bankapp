import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-bank-home',
  templateUrl: './bank-home.component.html',
  styleUrls: ['./bank-home.component.css']
})
export class BankHomeComponent implements OnInit {

  acno=""
  pswd=""
  amount=""
  
  acno1=""
  pswd1=""
  amount1=""

  // currentUname ne bankHome pg lekk aan kittandath so avide kittan vendii aa value ne user n paranje oru variable 
  //lekk kodukkanam.ennitt athine constructor nte ullil kodukkanam because aa bankHome pg open aayi varumbo thanna 
  //nammakk ee welcome username n ille msg kaananam.

user:any

// system thinte date and tym store cheyyaan oru variable declare cheythuu
lDate:any

//delete cheytha user nte acnt no kittanam so athine store cheyyaan oru variable declare cheythu
acntno:any

// deposit group model creation
depositForm=this.fb.group({
  // form array create cheythu
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]],
})

// withdraw group model creation
withdrawForm=this.fb.group({
  // form array create cheythu
  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9]*')]],


  //ith data string aano n check cheyyaanille validation methods aann.ithinte type a-z um A-Z um space um allow aakkum.
  //* kodukkunnath kore combinations repeat aakkunnond.
})


  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    this.user=this.ds.currentUname
    // lDate n ille variable ne new Date() n ille object lekk call aakkunne.
    this.lDate=new Date()
   }

  ngOnInit(): void {
// constructor n shesham run aavunne cls aann ith. log in cheythillenkil login alert varum then login pg lekk direct cheyyum.
    if(!localStorage.getItem("currentAcno")){
      alert("please log in")
      this.router.navigateByUrl('')
    }
  }


//deposit
deposit(){

  var acno=this.depositForm.value.acno
  var pswd=this.depositForm.value.pswd
  var amount=this.depositForm.value.amount

  //check if depositForm is valid
  if(this.depositForm.valid){

// calling deposit function of dataService

  const result=this.ds.deposit(acno,pswd,amount)
if(result)
{
  alert(amount+"successfully deposited.... and new balance is"+result) 
}
  }
  else{
    alert("invalid form")
  }
  }
//withdraw
withdraw(){
var acno=this.withdrawForm.value.acno1
var pswd=this.withdrawForm.value.pswd1
var amount=this.withdrawForm.value.amount1

  //check if withdrawForm is valid
  if(this.withdrawForm.valid)
{
// calling withdraw function of dataService

const result=this.ds.withdraw(acno,pswd,amount)
if(result)
{
  alert(amount+"successfully withdrawed.... and new balance is"+result) 
}
}
else{
  alert("invalid form")
}
}

// log out
logout(){
  localStorage.removeItem("currentAcno")
  localStorage.removeItem("currentUname")
  this.router.navigateByUrl('')
}

// delete my account
deleteAccount()
{
//acntno lekk delete button clk aavumbo aann value kittal.
this.acntno=JSON.parse(localStorage.getItem("currentAcno")|| '')
}

// cancel
cancel()
{
  this.acntno=''
}

// delete
delete(event:any){
  alert("delete account" +event+ "from parent")
  this.router.navigateByUrl('')

}
}
