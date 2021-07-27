import {Injectable} from '@angular/core';
import {UserModel} from "../models/userModel";

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  currentUser: string = 'currentUser';
  tokenKey: string = "token"

  constructor() {
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  deleteItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  get isLocalStorageSupported(): boolean {
    return !!localStorage
  }

  getCurrentUser(): UserModel {
    var user = JSON.parse(<string>localStorage.getItem(this.currentUser));
    return user;
  }

  setCurrentCustomer(user: UserModel) {
    localStorage.setItem(this.currentUser, JSON.stringify(user));
  }

  removeCurrentCustomer() {
    localStorage.removeItem(this.currentUser);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey)
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey)
  }
}
