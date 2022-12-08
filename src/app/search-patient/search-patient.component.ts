import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { generate } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  constructor(private api:ApiService ,private router:Router){
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
  deleteP=(id:any)=>{
    let data:any={"id":id} 
    this.api.deletePatient(data).subscribe(
      (generated:any)=>{
        console.log(generated)
        this.router.navigate(['/search'])
        window.location.reload()
        
      }
    )
  }

}
