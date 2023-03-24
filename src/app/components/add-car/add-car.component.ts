import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit{

  constructor(private carService: CarService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addCar(f: NgForm) {
    // console.log(f.value)

    this.carService.add(f.value);

    window.alert('Automobil je dodat');
    this.router.navigate(['/']);
  }

}
