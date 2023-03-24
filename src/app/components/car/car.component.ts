import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  constructor(private carService:CarService){}
  ngOnInit(): void {
    this.carService.getAll().subscribe(p=>console.log(p))
    
  }

}
