import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { ReportComponent } from './pages/report/report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  { path: 'report', 
    component: ReportComponent, 
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule,CommonModule 
  ],
  providers: [],
  exports: [RouterModule],
  declarations: [HomeComponent, RegisterFormComponent,ReportComponent]
})
export class AppRoutingModule { }
