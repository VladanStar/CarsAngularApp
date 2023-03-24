import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  totalLength: any;
  page: number = 1;
  p: any;
  searchText: any;

  cars:Car[]=[];
  constructor(private carService:CarService){}
  ngOnInit(): void {
    this.carService.getAll().subscribe(p=>this.cars= p)
    
  }

  
  sortTip(): void {
    this.cars.sort((a: Car, b: Car): number => {
      if (a.tip && b.tip) {
        return a.tip.localeCompare(b.tip);
      } else {
        return 0;
      }
    });
  }
  sortMarka(): void {
    this.cars.sort((a: Car, b: Car): number => {
      if (a.marka && b.marka) {
        return a.marka.localeCompare(b.marka);
      } else {
        return 0;
      }
    });
  }
  sortProizvodjac(): void {
    this.cars.sort((a: Car, b: Car): number => {
      if (a.proizvodjac && b.proizvodjac) {
        return a.proizvodjac.localeCompare(b.proizvodjac);
      } else {
        return 0;
      }
    });
  }
  sortGodini() {
    this.cars.sort((a: Car, b: Car): number => {
      if (a.godina_proizvodnje && b.godina_proizvodnje) {
        return a.godina_proizvodnje - b.godina_proizvodnje;
      } else {
        return 0;
      }
    });
  }
  exportToCsv() {
    const csv = Papa.unparse(this.cars);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'cars.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
