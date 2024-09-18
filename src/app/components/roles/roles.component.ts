import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IApiResponse, IRoles } from '../../model/interface/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  http = inject(HttpClient);
  inputType: string = 'button';
  allRoles: IRoles[] = [];
  //this is called property binding, interpolation is {{}}, 2 way binding [(ngModel)]
  //directives structural ngIf, ngFor, attributive ngStyle, ngClass

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get<IApiResponse>(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles'
      )
      .subscribe((res: IApiResponse) => {
        this.allRoles = res.data;
      });
  }
}
