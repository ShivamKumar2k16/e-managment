import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IApiResponse, IDesignation } from '../../model/interface/roles';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  master = inject(MasterService);
  designationList: IDesignation[] = [];
  ngOnInit(): void {
    this.getDesignation();
  }
  getDesignation() {
    this.master.getAllDesignation().subscribe(
      (res: IApiResponse) => {
        this.designationList = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
