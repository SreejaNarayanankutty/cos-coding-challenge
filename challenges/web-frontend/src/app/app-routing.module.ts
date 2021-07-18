import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardGuard]},
    { path: '', redirectTo: '/login',pathMatch: 'full'}
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
