import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientConditionComponent } from '../fhir/patient-condition/patient-condition.component';
import { Patient } from './patient.model';


@Component({
  selector: 'pam-calc',
  templateUrl: './pam.component.html',
  styleUrls: ['./pam.component.scss']
})
export class PamComponent implements OnInit {
  drugs = ['Apixaban (Eliquis)', 'Dabigatran (Pradaxa)', 'Edoxaban (Savaysa)', 'Rivaroxaban (Xarelto)', 'Warfarin (Coumadin/Jantoven)' ];
  model = new Patient('', '', '', '', '', null);
  warfarin = false;

  constructor() { }

  ngOnInit() {
  }

  checkDrug(value: string){
    console.log(value);
    if(value === 'Warfarin (Coumadin/Jantoven)'){
      this.warfarin = true;
    }
    else {
      this.warfarin = false;
    }
  }

  onSubmit(){
    console.log("Form Submitted");
  }

  onReset(form) {
    form.reset();
  }

}
