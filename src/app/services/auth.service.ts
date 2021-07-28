import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "../models/loginModel";
import {SingleResponseModel} from "../models/singleResponseModel";
import {TokenDetail, TokenModel} from "../models/tokenModel";
import {RegisterModel} from "../models/registerModel";
import {Observable} from "rxjs";
import {LocalstorageService} from "./localstorage.service";
import {UserModel} from "../models/userModel";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenDetail = new TokenDetail();
  userId: number;

  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: string,
              private localStorage: LocalstorageService) {
  }

  login(loginModel: LoginModel) {
    let loginPath = this.apiUrl + 'Auth/login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(loginPath, loginModel);
  }

  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    let registerPath = this.apiUrl + "Auth/register";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(registerPath, registerModel);
  }

  isAuthenticated(): boolean {
    if (this.localStorage.getToken()) {
      return true;
    } else {
      return false;
    }
  }



  logout() {
    this.localStorage.removeToken()
    this.tokenDetail = new TokenDetail();
  }
}
