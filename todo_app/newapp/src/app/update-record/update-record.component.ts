import { Component, OnInit } from '@angular/core';
import { TabledataService } from '../addtable/tabledata.service';
import {User} from './updateuser';
@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  styleUrls: ['./update-record.component.css']
})
export class UpdateRecordComponent implements OnInit {

  constructor(private tabledata:TabledataService ) { }

  id:any;
  ngOnInit(): void {
    this.tabledata.getData().subscribe(
      data=>this.id=data
    )
  }
  name="";
  ids="";
  inputvalue="";
  updatemessage=""
  updateinfo(){
    let body=new User(this.name,this.inputvalue);
    this.tabledata.updateUser(this.ids,body).subscribe(
      data=>{this.updatemessage=data.message;
        setTimeout(()=>{this.updatemessage=""},3000),
        this.ids="";
        this.inputvalue="",
        this.name=""
      },
      error=>console.log(error)
    )
  }
  
  


}
