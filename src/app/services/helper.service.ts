import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  listItems = new BehaviorSubject<any>(null);
  constructor() { }
}
