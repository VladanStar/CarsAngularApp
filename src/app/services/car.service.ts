import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import { Car } from '../models/car';
import { Observable, map } from 'rxjs';
import { list } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private db :AngularFireDatabase) { }

  getAll(): Observable<Car[]> {
    return this.db
      .list<Car>('/cars')
      .snapshotChanges()
      .pipe(
        map((x) =>
          x.map((y: any) => ({
            id: y.payload.key,
            ...(y.payload.val() as Car),
          }))
        )
      );
  }
  get(id: string): Observable<Car> {
    return this.db
      .object<Car>('/cars/' + id)
      .snapshotChanges()
      .pipe(
        map((x: any) => ({ id: x.payload?.key, ...(x.payload.val() as Car) }))
      );
  }
  update(CarId: string, Car: Car): void {
    this.db.object<Car>('/cars/' + CarId).update(Car);
  }
  add(Car: Car) {
    this.db.list('/cars').push(Car);
  }
  delete(carId:any) {
    this.db.object<Car>('/cars/'+carId).remove()
  }
}
