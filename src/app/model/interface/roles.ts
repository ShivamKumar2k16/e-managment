export interface IRoles {
  roleId: number;
  role: string;
}

export interface IDesignation {
  designationId: string;
  designation: string;
}

export interface IApiResponse {
  message: string;
  result: string;
  data: any;
}
