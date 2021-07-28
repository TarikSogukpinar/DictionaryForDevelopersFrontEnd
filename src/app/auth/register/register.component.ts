import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {RegisterModel} from "../../models/registerModel";
import {MessageModel} from "../../models/messageModel";

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
    this.createRegisterForm();
  }


  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      github: ["", Validators.required],
      linkedin: ["", Validators.required]
    })
  }

  register() {
    if (this.registerForm.invalid) {
      this.toastrService.error(MessageModel.notEmptySpace, MessageModel.cautionError);
    }
    let registerModel: RegisterModel = Object.assign({}, this.registerForm.value);

    this.authService.register(registerModel).subscribe(responseSuccess => {
      this.toastrService.success(responseSuccess.message, MessageModel.enterSuccess);
      setTimeout(() => {
        return this.router.navigate(['/auth/login']);
      }, 5000);

    }, responseError => {
      if (responseError.error.Errors.length > 0) {
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage, MessageModel.validationError)
        }
      }

    });
  }

}
