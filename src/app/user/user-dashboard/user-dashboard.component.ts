import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/modal/place';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{
        placeList:Place[]=[]
        preferenceList:any[]=[]
        formData={
          startDate:'',endDate:'',preference:''
        }
       constructor(private userService:UserService,private router:Router){

       }
       

       ngOnInit(): void {
        // const data=localStorage.getItem('auth_token');
        // console.log("Token  curr",data)
        //    this.userService.getPlaces().subscribe(data => {
        //        this.placeList=data
        //    })

           this.getTagsFromPlace();
       }

      getTagsFromPlace() {
         this.userService.getAllTags().subscribe(data=>{
          this.preferenceList=data
          //console.log("Data pref list",data)
         })
      }


      onSubmit(){
         console.log("formdata",this.formData)
         this.userService.getPlacesByTag(this.formData.preference).subscribe(
           data=>{
                console.log("Return *** data",data);
                this.router.navigate(['user/booking/',this.formData.preference])
           }
         )
      }

      onPreferenceChange() {
        console.log('Selected preference:', this.formData.preference);
      }

}
