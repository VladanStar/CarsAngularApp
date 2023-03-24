import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { VerifyMailComponent } from './components/verify-mail/verify-mail.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component : LoginComponent},

  {path: 'register', component : RegisterComponent},
  { path: 'f', component: CarComponent },
  {path: 'verify-mail', component : VerifyMailComponent},
  { path: 'car/add', component: AddCarComponent },
  { path: 'f/car/:id', component: CarDetailsComponent },
  { path: 'car/edit/:id', component: EditCarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
