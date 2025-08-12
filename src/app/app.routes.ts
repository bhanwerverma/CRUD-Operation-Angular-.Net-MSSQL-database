import { Routes } from '@angular/router';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { EmpFormComponent } from './components/emp-form/emp-form.component';

export const routes: Routes = [
    { 
        path:'',
        component:EmpListComponent
    },
    {
        path:'employlist'
        ,component:EmpListComponent
    },
    {
        path:'AddEmploy',
        component:EmpFormComponent
    },
     {
        path:'EditEmploy/:id',
        component:EmpFormComponent
    }
];
