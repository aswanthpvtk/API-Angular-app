import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-us-public',
  templateUrl: './view-us-public.component.html',
  styleUrls: ['./view-us-public.component.css']
})
export class ViewUsPublicComponent {

  constructor(private api:ApiService){
    api.usPublicData().subscribe(
      (response)=>{
        this.data = response
      }
    )
  }
data:any={}
}
