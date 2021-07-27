import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SingleResponseModel} from "../models/singleResponseModel";
import {UserModel} from "../models/userModel";
import {ResponseModel} from "../models/responseModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: String) {
  }


  getById(id: number): Observable<SingleResponseModel<UserModel>> {
    let newPath = this.apiUrl + "Users/getbyid?id" + id;
    return this.httpClient.get<SingleResponseModel<UserModel>>(newPath)
  }

  updateInfo(user: UserModel): Observable<ResponseModel> {
    let newPath = this.apiUrl + "Users/updateinfo";
    return this.httpClient.put<ResponseModel>(newPath, user);
  }

  getUserByEmail(email: String): Observable<SingleResponseModel<any>> {
    let newPath = this.apiUrl + "Users/getByEmail?email=" + email;
    return this.httpClient.get<SingleResponseModel<UserModel>>(newPath);
  }
}
