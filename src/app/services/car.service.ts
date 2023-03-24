import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database"

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private db :AngularFireDatabase) { }
}
