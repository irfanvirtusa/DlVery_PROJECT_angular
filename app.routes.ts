import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: "dashboard", pathMatch:'full' },
    { path: 'dashboard', component:DashboardComponent, pathMatch:'full', canActivate: [AuthGuard] },
    { path: 'login', component:LoginComponent, pathMatch:'full' },
    { path: '**', component:LoginComponent, pathMatch:'full' }
];
