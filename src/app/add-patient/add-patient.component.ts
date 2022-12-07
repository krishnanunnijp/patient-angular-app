import { Component } from '@angular/core';
import { generate } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
constructor(private api:ApiService){}
name=""
disease=""
doctor=""
data:any={}
readValue=()=>{
  this.data={
    "name":this.name,
    "disease":this.disease,
    "doctor":this.doctor
  }
  this.api.addPatient(this.data).subscribe(
    (generated:any)=>{
      console.log(generated)
      if(generated.status=="success"){
        alert("success")
        this.name=""
        this.disease=""
        this.doctor=""
      }
    }
  )
}


}
