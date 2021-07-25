import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseModel} from "../models/responseModel";
import {WordModel} from "../models/wordModel";
import {ListResponseModel} from "../models/listResponseModel";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: String) {
  }

  getWords(wordModel: WordModel): Observable<ListResponseModel<WordModel>> {
    let newPath = this.apiUrl + "Words/getAllWords"
    return this.httpClient.get<ListResponseModel<WordModel>>(newPath);
  }
}
