import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit{
      
     tag:string='';
     placeList:any[]=[]
     constructor(private route:ActivatedRoute,private userService:UserService){

     }

      ngOnInit(): void {
        this.route.params.subscribe(params => {
          // Access the 'id' parameter from the URL
          const tag = params['tag'];
          this.tag=tag;
          //  use the 'id' in your component logic
          // console.log('ID from URL:', tag);
        });

        this.getPlacesByTag();
      }

      getPlacesByTag(){
           this.userService.getPlacesByTag(this.tag).subscribe(data=>{
                  this.placeList=data;
                  console.log("Got data backend by preference",this.placeList)
           })
      }
}
