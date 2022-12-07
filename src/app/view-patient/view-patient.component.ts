import { Component } from '@angular/core';
import { generate } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {
  data:any=[]
  constructor(private api:ApiService){
    this.api.fetchPatient().subscribe(
      (generated:any)=>{
        this.data=generated
      }
    )
  }

}
