import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  //LoginComponent:- class name aann.

// login nte page l nammakk enthenkilum puthiya functions okke add cheyyanamenkil ath aa file nte ts(typescript) file mathre pattuu.
// type sript l class nte ullil aayirikkum variables okkke define cheyyal.

// string manipulation
aim="your perfect banking partner"
accno="account number please"
acno=""
pswd=""

// login group model creation
loginForm=this.fb.group({
  // form array create cheythu
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  //ith data string aano n check cheyyaanille validation methods aann.ithinte type a-z um A-Z um space um allow aakkum.
  //* kodukkunnath kore combinations repeat aakkunnond.
})


// DEPENDENCY INJECTION- contructor nte ullilaann perform cheyyal.
// private access specifier aann, routerLogin-instance of a class aann- ithilaann navigateByUrl() illeth, Router - class aann.
  constructor(private routerLogin:Router,private ds:DataService,private fb:FormBuilder) {} 

  ngOnInit(): void {
  }
  // acnt no chage
  acnoChange(event:any)  // event nte type onnum areellenkil colon itt any kodukkanm allel error aavum.
  {
this.acno=event.target.value
console.log(this.acno);
  }
  // pswd change
pswdChange(event:any)
{
  this.pswd=event.target.value
console.log(this.pswd);

}


  // function define cheythath
  //template referencing nte case le argument kodukkanduu
  
//   login(a:any,p:any)
// {
// console.log(a);
// var acno=a.value
// var pswd=a.value
// let database=this.database
// if(acno in this.database)
// {
//   if(pswd==database[acno]["password"])
//   {
//     alert("login successfully")
//   }
//   else{
//     alert("incorrect password")
//   }
// }
// else{
//   alert("user does not exist")
// }
// }

login()
{
     //cls l declare cheythath kittan aann this pointer use aakkunne.ith cls nte ullile (user kodukkunne) acno aann.
var acno=this.loginForm.value.acno
var pswd=this.loginForm.value.pswd

// check if loginForm is valid

if(this.loginForm.valid)
{
const result=this.ds.login(acno,pswd)
if(result){
  alert("login successfull")
  this.routerLogin.navigateByUrl("bank-home")
}
}
else{
  alert("invalid form")
}

// let database=this.ds.database
// if(acno in database)
// {
//   if(pswd==database[acno]["pswd"])  // namma database l enthaano password nte name koduthe athenne ithil kodukkanm.
//   {
//     alert("login successfully")
//     // login button clk cheyathaaal user successfully login varum next eth pg lekkaano pondath aa pgnte name navigateByUrl() method nte ullilaann use aakkal.
//     // ee method ne access cheyyunnath routerLogin l ninnaann.
//     this.routerLogin.navigateByUrl('bank-home')
//   }
//   else{
//     alert("incorrect password")
//   }
// }
// else{
//   alert("user does not exist")
// }
 }

}

