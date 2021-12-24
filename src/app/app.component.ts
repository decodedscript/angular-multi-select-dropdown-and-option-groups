import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from './models/IDepartment';
import { IDesignation } from './models/IDesignation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  departments$: Observable<IDepartment[]>;
  designations$: Observable<IDesignation[]>;

  constructor(private _http: HttpClient) {

  }
  ngOnInit() {
    this.getDepartments();
  }
  getDepartments() {
    this.departments$ = this._http.get<IDepartment[]>("/assets/data/department.json");
  }
  getDesignations() {
    this.designations$ = this._http.get<IDesignation[]>("/assets/data/designation.json");
  }
}
