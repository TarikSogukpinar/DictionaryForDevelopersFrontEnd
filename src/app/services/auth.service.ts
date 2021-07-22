import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "../models/loginModel";
import {SingleResponseModel} from "../models/singleResponseModel";
import {TokenModel} from "../models/tokenModel";
import {TokenDetail} from "../models/tokenDetails";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenDetail = new TokenDetail();
  userId: number;

  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: string) {
  }

  login(loginModel: LoginModel) {
    let loginPath = this.apiUrl + 'login';
    return this.httpClient.post<SingleResponseModel<TokenModel>>(loginPath, loginModel);
  }
}
