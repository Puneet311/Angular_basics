import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabledataService } from './tabledata.service';
@Component({
  selector: 'app-addtable',
  templateUrl: './addtable.component.html',
  styleUrls: ['./addtable.component.css']
})
export class AddtableComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,public dataservice:TabledataService) { }
  formData:any=[];

  ngOnInit(): void {
    this.dataservice.getData().subscribe(
      data=>{this.formData=data;console.log(this.formData)}
    )
  }
  registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email:['',Validators.required],
    contact:['',Validators.required],
    DOB:['',Validators.required],
    gender:['',Validators.required]
  });

  showtable=false;
  showTable(){
    this.dataservice.getData().subscribe(
      data=>{this.formData=data;}
    )
    this.showtable=true;  
  }

  showForm(){
    this.showtable=false;
    this.usermessage="";
  }

  usermessage:any;
  adduser(){
    let body={"first_name":this.registerForm.controls.firstName.value,
               "last_name":this.registerForm.controls.lastName.value,
               "contact":this.registerForm.controls.contact.value,
               "gender":this.registerForm.controls.gender.value,
               "email":this.registerForm.controls.email.value,
               "date_of_birth":this.registerForm.controls.DOB.value}
    this.dataservice.addUser(body).subscribe(
      data=>{this.usermessage=data.meassage}
    )
  }

  deleteMessage:any
 
  deleteitem(id:any){
    this.dataservice.deleteUser(id).subscribe(
      data=>{this.deleteMessage=data.message;
      this.showTable();}
    );
}
  



}
