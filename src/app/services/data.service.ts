import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {  // cls nte ullil pste cheyyuka.
  //eni ee dataservice n ille cls le data ne register component l kittanam athinayitt use akkunne ann dependency injection.
  // ith normally perform cheyyunnath constructor laann.

// login successfull aaya person nte acno kittanam transaction history l details display cheyyanamenkil, so currentAcno n paranjitt oru variable nammma declare cheyyanam.aa variable nte ullil aayirikkum login cheyth varunna users nte acno store aayitt indaavuka.then login successfull aaya stmnt n shesham athine this.currentAcno=acno assign cheyyuka.
currentAcno:any
// login success aaya user nte name store cheyyaan vendii
currentUname:any

  database: any = {
    1000: { acno: 1000, uname: "neer", pswd: 1000, balance: 5000,transaction:[] },
    1001: { acno: 1001, uname: "heer", pswd: 1001, balance: 5000,transaction:[] },
    1002: { acno: 1002, uname: "vyom", pswd: 1002, balance: 5000,transaction:[] },
  }

  constructor() {
    this.getData()
   }


  // to store data in local storage
storeData(){
  //local storage lekk store cheyyunna key um value ntem type eppum string aann store aakkal so ithine string lekk convert cheyyanm using JSON.stringfy()
  localStorage.setItem("database",JSON.stringify(this.database))  // entire database store aakkanam
  // current acno um current uname um store aakkanam
  if(this.currentAcno)
  {
    localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  }
  if(this.currentUname){
    localStorage.setItem("currentUname",JSON.stringify(this.currentUname))
  }
}
// to get data from local storage
getData()
{
  if(localStorage.getItem("database")) //get the database
  {
    this.database=JSON.parse(localStorage.getItem("database") || '')

  } 
  if(localStorage.getItem("currentAcno")){
    this.currentAcno=JSON.parse(localStorage.getItem("currentAcno") || '')
  }
  if(localStorage.getItem("currentUname")){
    this.currentUname=JSON.parse(localStorage.getItem("currentUname") || '')
  }
}



  // eni ippo register pg le codes complicated aavathirikkanaann data.service.ts l register perform cheyyunna -
  //function define ellm cheyyunnathann.

  // ivide data ne access cheyyunnath key:value pair aayittaann.
  register(acno: any, pswd: any, uname: any) {

    let database = this.database
    if (acno in this.database) {
      return false
    }
    else {
      // bank application l unique aayitt illeth acnt no. aann.so accno. vechittaann database ne access cheyyal.

      //ippo namma register pg l koduthathum database l koduthe name um athaayath acno,pswd,uname athokke same aanenkil
      // aa per matram koduthaal madhi eni adhava randum different aanenkil key:value ee format l data ne kodukkanam.
      database[acno] = {
        acno,
        uname,
        pswd,
        balance: 0,   // key:value
        transaction:[]
      }
      console.log(database);

      this.storeData()

      return true //regitser button clk cheythaal register ()function l data ne i/p aayitt edukkum.then ath ok aanenkil 
      // login cheythaal ath ok aavum.
    }

  }
  // login koode data service l include cheyyanam
  login(acno: any, pswd: any) {
    let database = this.database

    if (acno in database) {
      if (pswd == database[acno]["pswd"]) {  // ivide aann login successfull aavunne.
        this.currentAcno=acno

       this.currentUname=database[acno]["uname"]  // successfull aayitt login cheytha users name display aakkaan vendii

       this.storeData()


        return true  // return n paranjaal execution atre illu athepole aa function aaraanno call aakkiye return vannaal angottekenne control povum.
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("user does not exist!!!!")
      return false
    }
  }

  // deposit

  deposit(acno: any, pswd: any, amount: any) { // function definition aayond type specify cheyyanm.

    var amt = parseInt(amount)  // type string nn int lekk maattan use aakkiye.

    let database = this.database
    if (acno in database) {
      if (pswd == database[acno]["pswd"]) {
        database[acno]["balance"] += amt
// eppellam deposit success aavum aa tym okke transaction history lekk add cheyyanam.kore datas okke add cheyyaanillond
// aann push({}) nte ullil curly braze kodukkunne.collection of data specify cheyyaan.
database[acno]["transaction"].push({
  amount:amount,
  type:"CREDIT"

})


this.storeData()

        return database[acno]["balance"]
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("user does not exist!!!")
      return false
    }
  }

  // withdraw
  withdraw(acno: any, pswd: any, amount: any) { // function definition aayond type specify cheyyanm.

    var amt = parseInt(amount)  // type string nn int lekk maattan use aakkiye.

    let database = this.database
    if (acno in database) {
      if (pswd == database[acno]["pswd"]) {
        if (database[acno]["balance"] > amt) {
          database[acno]["balance"] -= amt

// eppellam withdraw success aavum aa tym okke transaction history lekk add cheyyanam.
          database[acno]["transaction"].push({
            amount:amount,
            type:"DEBIT"
          
          })
          
          this.storeData()

          
          return database[acno]["balance"]
        }
        else {
          alert("insufficient balance")
          return false
        }
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("user does not exist!!!")
      return false
    }
  }



  // transaction history

getTransaction(acno:any){
return this.database[acno]["transaction"]
}


}
