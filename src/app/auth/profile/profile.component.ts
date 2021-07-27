import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../models/userModel";
import {FormBuilder} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {LocalstorageService} from "../../services/localstorage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: UserModel;

  constructor(private formBuilder: FormBuilder,
              private toastrService: ToastrService,
              private authService: AuthService,
              private router: Router,
              private localStorageService: LocalstorageService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    return this.localStorageService.getCurrentUser();
  }

}
