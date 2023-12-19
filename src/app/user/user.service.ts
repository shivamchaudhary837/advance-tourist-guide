import { Injectable } from '@angular/core';
import { User } from '../modal/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Place } from '../modal/place';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl='http://localhost:9999/api/users/'
  apiUrlPlace="http://localhost:9097/place/"
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any[]>{
     return this.http.get<any[]>(this.apiUrl+'allUsers')
  }

  getPlaces():Observable<Place[]>{
    return this.http.get<Place[]>(this.apiUrl+'admin/viewplace')
  }

  registerUser(data :any){
      return this.http.post(this.apiUrl+'signup',data);
  }

   getAllTags():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrlPlace+'all');
   }

    getPlacesByTag(tag:string):Observable<any[]>{

       return this.http.get<any[]>(this.apiUrlPlace+'tag/'+tag);
    }
}
