import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forChild([
      {path: "", component:LoginComponent}
    ])
  ]
})
export class LoginModule { }
