import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiResponse } from '../model/interface/roles';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  http = inject(HttpClient);

  constructor(http: HttpClient) {}

  getAllDesignation() {
    return this.http.get<IApiResponse>(
      'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation'
    );
  }
}
