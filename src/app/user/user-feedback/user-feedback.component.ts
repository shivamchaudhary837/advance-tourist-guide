import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.css']
})
export class UserFeedbackComponent implements OnInit{
         
  FeedbackData={
    comment:'',
    rating:0,
    userId:0,
    placeId:0
  }

  selectedPlace:string='';
  placeList:any[]=[]
  FeedbackList:any[]=[]
  
  constructor(private userService:UserService,private route:Router){
 
  }
 
  ngOnInit():void{
    this.userService.getPlaces().subscribe(data=>{
      this.placeList=data;
      console.log("data fetched",data)
    })
   
   
  }

  OnSubmit(){
     let placeIdArray=this.placeList.filter(data => data.name === this.selectedPlace)
     let placeData=placeIdArray[0];

     let userId=localStorage.getItem("userId");

     this.FeedbackData.userId = parseInt(userId!);
     this.FeedbackData.placeId=placeData.placeID;
     
     console.log("feedback data ",this.FeedbackData)
     this.userService.addFeedback(this.FeedbackData).subscribe(
        (response)=>{
             console.log("data added ",response);
             window.alert("Feedback Added Successfully");

             setTimeout(()=>{
                this.route.navigate(['user/dashboard']);
             },1000)
        }
     )
  }

}
