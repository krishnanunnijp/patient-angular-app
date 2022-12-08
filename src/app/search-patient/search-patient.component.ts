import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  constructor(private api:ApiService){
    api.fetchPatient().subscribe(
      (generated:any)=>{
        this.data=generated
      }
    )
  }
  name=""

  data:any=[]
  
  searchE=()=>{
    let data1={
      "name":this.name
    }

    this.api.searchPatient(data1).subscribe(
      (generated:any)=>{
        if(generated.length!=0){
        console.log(generated)
        this.data=generated
        
      }
        else{
          alert("invalid")
          this.data=[]
        }

      }

    )

  }

}
