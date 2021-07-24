import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

const Message = {
  enterSuccess: "Giriş Başarılı",
  notEmptySpace: "Boş alan bırakmamalısınız!"
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private toastrService: ToastrService
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
        this.toastrService.info(response.message);
        this.toastrService.info(Message.enterSuccess)
        setTimeout(() => {
          return this.router.navigate(['/']);
        }, 5000);

      }, responseError => {
        this.toastrService.error(responseError.error);
      })
    } else {
      this.toastrService.error(Message.notEmptySpace)
    }
  }

  // getByEmail(email:String){
  //   this.use
  // }


}
