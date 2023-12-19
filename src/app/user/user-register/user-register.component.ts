import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
         
        
  signUpData={
    name:'',email:'',password:'',repeatPassword:''
 }

 constructor(private userService:UserService){

 }

 onSubmit() {
   console.log("data admin ",this.signUpData);

    if(this.signUpData.password !== this.signUpData.repeatPassword){
      // ToDO : use toast here
      window.confirm("password does not match")
    }
    
    else{
       let data={
         name:'',emailId:'',password:'',role:'user'
       }
       data.name=this.signUpData.name;
       data.emailId=this.signUpData.email
       data.password=this.signUpData.password
       //call user service
       this.userService.registerUser(data).subscribe(
         ()=>{
            console.log("Data added successfully")
            
         },
         (error)=>{
          console.log("Error occur",error)
         }
       );

    }
 }
}
