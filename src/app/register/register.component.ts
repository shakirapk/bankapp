import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // html pg l create aakkiya ella input tag lem values ne ts file specify cheyyanm, ennaale error illaathe nikkuu.
  uname=""
  acno=""
  pswd=""


  // register group model creation
  registerForm=this.fb.group({
    // form array create cheythu
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    //ith data string aano n check cheyyaanille validation methods aann.ithinte type a-z um A-Z um space um allow aakkum.
    //* kodukkunnath kore combinations repeat aakkunnond.
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]] //pattern function um brck nte ullil regular expression um.
  })

    
// ds register component nte property aan so aa property vech nammakk DataService le values edukkam
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){

    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    var uname=this.registerForm.value.uname

// form valid aano nn nokkaan vendii
if(this.registerForm.valid)
{

const result=this.ds.register(acno,pswd,uname)

// user reg pg laann, so work cheyyal re pg n thanneyaann.data.service.ts l just logic kodukkunne illuu.

if(result){
  alert("successfully registered")
  this.router.navigateByUrl("") //login pg lekk direct cheyyaan vendi
}
else{
alert("already exist")
}
  } 
  else
  {
    alert("invalid form")
  }
  }   
}
