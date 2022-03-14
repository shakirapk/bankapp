import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent implements OnInit {

  // parent nte value child n hold aakkanamenkil input decorator venam,ath represent cheyyunnath @ symbol vechittaann. item - property bind cheythe name.
  @Input() item:string |undefined

  // to create an userdefined event , output decorator use aakkunne child to parent lekk - cancel aaakkaanille event
  @Output() onCancel=new EventEmitter()

  // delete aakkaanille event
  @Output() onDelete=new EventEmitter()
 

  constructor() { }

  ngOnInit(): void {
  }

  // btn "no" clk aakkiyaal , cancel 
  cancel()
  {
    // to occur the event
    this.onCancel.emit()
  }

  // btn "yes" clk aakkiyaal , delete
delete()
{
     // to occur the event
this.onDelete.emit( this.item) 
}
}
