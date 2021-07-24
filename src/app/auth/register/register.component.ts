import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {RegisterModel} from "../../models/registerModel";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toastrService: ToastrService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createLoginForm();
  }


  createLoginForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  register() {
    if (this.registerForm.invalid) {
      this.toastrService.error("Lütfen boş alan bırakmayınız", 'Dikkat');
    }
    //delete this.registerForm.value['confirmPassword'];
    let registerModel: RegisterModel = Object.assign({}, this.registerForm.value);
    this.authService.register(registerModel).subscribe(responseSuccess => {
      this.toastrService.success(responseSuccess.message, 'Başarılı Yönlendiriliyorsunuz');
      setTimeout(() => {
        return this.router.navigate(['/auth/login']);
      }, 5000);

    }, responseError => {
      if (responseError.error.ValidationError) {
        for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
          this.toastrService.error(
            responseError.error.ValidationErrors[i].ErrorMessage, 'Doğrulama Hatası'
          );
        }
        return;

      }
      this.toastrService.error(
        responseError.status + ' ' + responseError.name, responseError.error
      );
    });
  }

}
