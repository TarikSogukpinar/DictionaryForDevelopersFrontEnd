import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {LocalstorageService} from "../../services/localstorage.service";
import {ToastrService} from "ngx-toastr";
import {MessageModel} from "../../models/messageModel";

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {


  constructor(private router: Router,
              private authService: AuthService,
              private localStorageService: LocalstorageService,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
  }

  isAuth(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.localStorageService.removeToken();
    this.localStorageService.removeCurrentCustomer();
    this.toastrService.success(MessageModel.exitSuccess)
    return this.router.navigate(["/"]);
  }


}
