import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseModel} from "../models/responseModel";
import {WordModel} from "../models/wordModel";

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private httpClient: HttpClient, @Inject('apiUrl') private apiUrl: String) {
  }

  addWord(wordModel: WordModel): Observable<ResponseModel> {
    // @ts-ignore
    return this.httpClient.post<ResponseModel>(this.apiUrl + "Words/addWord" + wordModel);
  }
}
