import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  id:any;

  car:Car={}

   constructor(private carServis:CarService, private route:ActivatedRoute,
     private router:Router){}
   ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get("id")
    if(this.id){


    this.carServis.get(this.id).subscribe(p => {
     this.car = p;
     console.log(this.car);
   });
 }
   }
   deleteCar(){
     let id = this.id as string;
     if(confirm("Da li ste sigurni?")){
       if(id){
     this.carServis.delete(this.id);
     this.router.navigate(["f"])

     }
   }
 }
}
