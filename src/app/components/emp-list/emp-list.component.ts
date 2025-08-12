import { Component, OnInit } from '@angular/core';
import { IEmploy } from '../../interfaces/Employ.interface';
import { GetEmployesService } from '../../get-employes.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-emp-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, RouterLink , CurrencyPipe],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent implements OnInit {
  EmployList: IEmploy[] = [];
  constructor(private Employservice: GetEmployesService, private router: Router) { }
  displayedColumns: string[] = ['id', 'name', 'email', 'salary', 'phone', 'age', 'Action Button'];
  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.Employservice.getAllEmployes().subscribe((data) => {
      this.EmployList = data
      console.log(this.EmployList, "Employs data")
    })
  }

  onDelete(id: any) {
    if(confirm("Are you sure You want to delete this data"))
    {
      this.Employservice.DeleteEmploye(id).subscribe(() => {
      alert("Remove successfully");
      this.refreshList();
    })
    }
    // alert("its working")

  }


}
