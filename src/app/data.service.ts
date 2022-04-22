import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['Deseo 1','Deseo 2', 'Deseo 3']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal)
  }
}
