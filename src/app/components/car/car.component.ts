import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  totalLength: any;
  page: number = 1;
  p: any;
  

  cars:Car[]=[];
  constructor(private carService:CarService){}
  ngOnInit(): void {
    this.carService.getAll().subscribe(p=>this.cars= p)
    
  }

}
