import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-user-info',
  templateUrl: './view-user-info.component.html',
  styleUrls: ['./view-user-info.component.css']
})
export class ViewUserInfoComponent {

  constructor(private api:ApiService){
    api.userInfoData().subscribe(
      (response)=>{
        this.data = response
      }
    )
  }
 data:any={}
}
