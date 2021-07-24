import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactModel} from "../models/contactModel";
import {Observable} from "rxjs";
import {ResponseModel} from "../models/responseModel";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: String) {
  }

  sendContact(contactModel: ContactModel): Observable<ResponseModel> {
    // @ts-ignore
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Contacts/addContact" + contactModel)
  }
}
