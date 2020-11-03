import { Injectable } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {

  date;
  todayDate(){
    this.date = new Date()
    return this.date;
  }
  private sensitiveData = []
  private apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClientModule){}

  getData(){
    // return this.http.get(this.apiUrl);
  }

}
