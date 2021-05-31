import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtableComponent } from './addtable/addtable.component';
import { UpdateRecordComponent } from './update-record/update-record.component';

const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'',component:AddtableComponent},
  {path:"update",component:UpdateRecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
