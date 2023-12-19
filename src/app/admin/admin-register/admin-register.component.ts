import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {

      constructor(private adminService:AdminService){

      }

       signUpData={
          name:'',email:'',password:'',repeatPassword:''
       }

       onSubmit() {
         //console.log("data admin ",this.signUpData);

          if(this.signUpData.password !== this.signUpData.repeatPassword){
            // ToDO : use toast here
            window.confirm("password does not match")
          }
          
          else{
                console.log("Admin data",this.signUpData)
                this.adminService.registerAdmin(this.signUpData).subscribe(
                  ()=>{
                      console.log("Admin Register successfully")
                  }
                )
          }
       }
}
