import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animationdemo',
  templateUrl: './animationdemo.component.html',
  styleUrls: ['./animationdemo.component.css'],
  animations:[
    trigger('openClose',[  //animation nte name
      state('open',style(   // state specify cheyyunnath
        {
          height:"500px",
          backgroundColor:"green"
        }
      )),
      state('close',style(
        {
          height:"250px",
          backgroundColor:"red"
        }
      )),
      transition('open=>close',[
        animate('2s') //timing specify cheyyunn
      ]),
      transition('close=>open',[
        animate('1s') //timing specify cheyyunn
      ])
    ])
  ]
})
export class AnimationdemoComponent implements OnInit {

  isOpen= true

  constructor() { }

  ngOnInit(): void {
  }
// toggle
toggle()
{
  // isOpen true aayitt already set aakki then athine not vech call cheythe
  this.isOpen=!this.isOpen
}


}
