import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FormsModule } from '@angular/forms';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserPlaceCardComponent } from './user-place-card/user-place-card.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserBookingComponent } from './user-booking/user-booking.component';





@NgModule({
  declarations: [
    UserLoginComponent,
    UserDashboardComponent,
    UserNavbarComponent,
    UserPlaceCardComponent,
    UserRegisterComponent,
    UserBookingComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class UserModule { }
