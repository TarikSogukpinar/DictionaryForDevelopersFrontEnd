import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactModel} from "../models/contactModel";
import {Observable} from "rxjs";
import {ResponseModel} from "../models/responseModel";
import {ListResponseModel} from "../models/listResponseModel";
import {WordModel} from "../models/wordModel";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: String) {
  }

  sendContact(contactModel: ContactModel): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'Contacts/addContact'
    return this.httpClient.post<ResponseModel>(newPath, contactModel);
  }

  getWords(): Observable<ListResponseModel<WordModel>> {
    let newPath = this.apiUrl + "Words/getAllWords"
    return this.httpClient.get<ListResponseModel<WordModel>>(newPath)
  }
}
