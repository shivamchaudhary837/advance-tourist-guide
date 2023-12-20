import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

  model = { username: '', password: '' };
  errorMessage: string = '';

 constructor(private adminService:AdminService,private route:Router){

 }
  ngOnInit(): void {
   
  }

  onSubmit(): void {
    //console.log("user login data ", this.signUpData);
  
    this.adminService.loginAdmin(this.model).subscribe(
      (response) => {
        console.log("Success. Return Data:", response);
        
        // Check the status code
        if (response.status === 202) {
          console.log("Login success");
          this.route.navigate(['admin/dashboard'])
        } 
      },
      (error) => {
        console.error("Error. Return Data:", error);
  
        // Check the status code in the error response
        if (error.status === 400) {
          console.log("Email Not Found");
        } else if (error.status === 401) {
          console.log("Incorrect password");
        } 
      }
    );
  }


}




