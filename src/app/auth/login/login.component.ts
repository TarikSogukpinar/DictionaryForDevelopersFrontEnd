import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/userModel";
import {LocalstorageService} from "../../services/localstorage.service";

const Message = {
  enterSuccess: "Giriş Başarılı Yönlendiriliyorsunuz!",
  notEmptySpace: "Boş alan bırakmamalısınız!"
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  currentUser: UserModel;
  dataLoaded = false;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastrService: ToastrService,
              private userService: UserService,
              private localStorageService: LocalstorageService
  ) {
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  login() {
    if (this.loginForm.valid) {
      let loginModel = Object.assign({}, this.loginForm.value)

      this.authService.login(loginModel).subscribe(response => {
        this.toastrService.info(Message.enterSuccess)
        this.dataLoaded = true;
        localStorage.setItem("token", response.data.token);
        this.getUserByEmail(loginModel.email);
        setTimeout(() => {
          return this.router.navigate(['/']);
        }, 5000);

      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası")
          }
        }
      })
    } else {
      this.toastrService.error(Message.notEmptySpace)
    }
  }

  getUserByEmail(email: String) {
    this.userService.getUserByEmail(email).subscribe(responseSuccess => {
      this.currentUser = responseSuccess.data;
      this.localStorageService.setCurrentCustomer(this.currentUser);
    })
  }


}
