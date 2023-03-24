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
}
