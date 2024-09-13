import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  inputType: string = 'button'; 
  //this is called property binding, interpolation is {{}}, 2 way binding [(ngModel)]
  //directives structural ngIf, ngFor, attributive ngStyle, ngClass
}
