import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { IEmploy } from '../../interfaces/Employ.interface';
import { GetEmployesService } from '../../get-employes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-emp-form',
  imports: [MatInputModule, MatButtonModule, MatIcon, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './emp-form.component.html',
  styleUrl: './emp-form.component.css'
})
export class EmpFormComponent implements OnInit {
  EmployeeForm !: FormGroup;
  id: number | null = null;
  isEditMode: boolean = false;
  constructor(private employeservice: GetEmployesService, private Route: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.EmployeeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/), Validators.minLength(10)]),
      salary: new FormControl('', [Validators.required])
    })

    this.id = Number(this.Route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.isEditMode = true
      this.employeservice.getdatabyid(this.id).subscribe((data) => {
        this.EmployeeForm.patchValue(data)
        
      }
      )
    }

  }




  onSubmit() {

    if (this.EmployeeForm.valid) {
      const employeadded: IEmploy = {
        Name: this.EmployeeForm.value.name!,
        age: Number(this.EmployeeForm.value.age!),
        Email: this.EmployeeForm.value.email!,
        Salary: Number(this.EmployeeForm.value.salary!),
        Phone: String(this.EmployeeForm.value.phone!)
      }
      if(this.isEditMode){
        this.employeservice.Updatedatabyid(this.id,employeadded).subscribe((res)=>{
          alert("Update successfully");
           this.EmployeeForm.reset();
        this.route.navigate(['/employlist']);
        this.isEditMode=false
        })
      }
      else{
      this.employeservice.AddEmploye(employeadded).subscribe((res) => {
        alert("Employe added successfull");
        this.EmployeeForm.reset();
        this.route.navigate(['/employlist']);
      })
    }
    }
  }

  
}
