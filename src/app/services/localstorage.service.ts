import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  currentUser: string = 'currentUser';
  tokenKey = "token"
  constructor() { }

  setItem(key:string,value:any){localStorage.setItem(key,value);}
  getItem(key:string){return localStorage.getItem(key);}
  deleteItem(key:string){localStorage.removeItem(key);}
  clear(){localStorage.clear();}

  get isLocalStorageSupported(): boolean {return !!localStorage}

  // getCurrentCustomer():Customer{
  //   return JSON.parse(localStorage.getItem(this.currentCustomer));
  // }
  //
  // setCurrentCustomer(customer:Customer){
  //   localStorage.setItem(this.currentCustomer,JSON.stringify(customer));
  // }
  //
  removeCurrentCustomer(){
    localStorage.removeItem(this.currentUser);
  }

  setToken(token: string){
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(){
    return localStorage.getItem(this.tokenKey)
  }

  removeToken(){
    localStorage.removeItem(this.tokenKey)
  }
}
