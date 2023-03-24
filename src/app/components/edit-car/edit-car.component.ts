import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {
  id:any;
 car:Car = {

    broj_motora:"",
    broj_sedista:0,
    godina_proizvodnje:0,
    img:"",
    konjskih_snaga:0,
    kubikaza:"",
    marka:"",
    proizvodjac:"",
    tip:"",
};
// zanr: 're'
// }
  constructor(private carServis:CarService,
    private route:ActivatedRoute,
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
  updateCar(f:NgForm){
// console.log(f.value)
 let id =this.id as string;
this.carServis.update(id, f.value);
window.alert('Automobil je editovana')
this.router.navigate(["f"])
// f.reset();
  }

}


