import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SingleResponseModel} from "../models/singleResponseModel";
import {UserModel} from "../models/userModel";
import {ResponseModel} from "../models/responseModel";
import {TokenModel} from "../models/tokenModel";
import {UserPasswordUpdateModel} from "../models/userPasswordUpdate";
import {UserUpdateModel} from "../models/userUpdateModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: String) {
  }


  getByUserId(id: number): Observable<SingleResponseModel<UserUpdateModel>> {
    let newPath = this.apiUrl + "Users/getbyid?id" + id;
    return this.httpClient.get<SingleResponseModel<UserUpdateModel>>(newPath)
  }


  updateUser(userUpdateModel: UserUpdateModel): Observable<ResponseModel> {
    let newPath = this.apiUrl + "Users/updateUser"
    return this.httpClient.post<ResponseModel>(newPath, userUpdateModel);
  }

  getUserByEmail(email: String): Observable<SingleResponseModel<UserModel>> {
    let newPath = this.apiUrl + "Users/getByEmail?email=" + email;
    return this.httpClient.get<SingleResponseModel<UserModel>>(newPath);
  }

  changePassword(userPasswordUpdateModel: UserPasswordUpdateModel): Observable<ResponseModel> {
    let newPath = this.apiUrl + "Users/changePassword"
    return this.httpClient.post<ResponseModel>(newPath, userPasswordUpdateModel);
  }
}
