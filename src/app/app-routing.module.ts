import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path:'home',component:HomeComponent},
  // {path:'about',component:AboutComponent},
  // {path:'cars',component:CarsComponent},
  // {path:'services',component:ServicesComponent},
  // {path:'contact',component:ContactComponent},
  {path:"register",component:SignUpComponent},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
