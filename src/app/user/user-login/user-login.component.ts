import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { ToastComponent } from 'src/app/toast/toast/toast.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

        model = { username: '', password: '' };
        errorMessage: string = '';

       constructor(private authService:AuthService,private router:Router){

       }

      

  onSubmit(): void {
    console.log("user login data ",this.model);
    
    this.authService.userLogin(this.model.username, this.model.password).subscribe(
      (response) => {
        this.authService.setAuthToken(response.token);
        this.router.navigate(['user/dashboard']);
        console.log("User logged in successfully")
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';
      }
    );
  }


}
