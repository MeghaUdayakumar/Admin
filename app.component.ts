import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/Service/admin.service';

export class AdminModel{
  id?:any;
  OutletName:string;
  StreetName:string;
  Landmark:string;
  No_of_AvaiFoodItems:number;
  Req_Volunteer:number;
  OrderDate:number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  outlet: AdminModel[]=[];

  isEdit:boolean=false;
  
  constructor(private adminService:AdminService){}
  

   admin:AdminModel = new AdminModel();

   onSubmit(form:NgForm):void
   {
     if(!this.isEdit)
     {
      console.log(form.value);
      this.adminService.Create(form.value).subscribe(resp=>{
      console.log(resp);
      form.resetForm();
      this.getAll();
      })

     }
    else{
      console.log(form.value);
      this.adminService.Update(form.value).subscribe(resp=>{
      console.log(resp);
      form.resetForm();
      this.isEdit=false;
      this.getAll();
      })

    }
   }

   getAll():void
   {
    this.adminService.GetAll().subscribe(resp=>{
      
      this.outlet= resp;
    })
   }
   edit(data:AdminModel):void
   {
    
    this.isEdit=true;
    this.adminService.GetOne(data.id).subscribe(resp => {this.outlet=resp;
    })
   }
   delete(data:AdminModel):void{
    this.adminService.Delete(data.id).subscribe(resp => {this.getAll();
    })
   }
   ngOnInit(): void {
    this.getAll();
  }

  
}
