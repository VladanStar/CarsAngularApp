import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { EditCarComponent } from './components/edit-car/edit-car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'f', component: CarComponent },
  {path: 'register', component : RegisterComponent},
  {path: 'login', component : LoginComponent},
  { path: 'car/add', component: AddCarComponent },
  { path: 'f/car/:id', component: CarDetailsComponent },
  { path: 'car/edit/:id', component: EditCarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
