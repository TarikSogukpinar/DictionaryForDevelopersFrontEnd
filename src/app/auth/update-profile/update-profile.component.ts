import {Component, OnInit} from '@angular/core';
import {LocalstorageService} from "../../services/localstorage.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {UserModel} from "../../models/userModel";
import {UserService} from "../../services/user.service";
import jwtDecode from 'jwt-decode';
import {UserUpdateModel} from "../../models/userUpdateModel";
import {MessageModel} from "../../models/messageModel";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  userId: number;
  user: UserUpdateModel;
  updateUserForm: FormGroup;
  updatePasswordForm: FormGroup;

  constructor(private localStorageService: LocalstorageService,
              private formBuilder: FormBuilder,
              private toastrService: ToastrService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.updateForm();
    this.getUserById();
    this.createUpdatePasswordForm()
  }

  updateForm() {
    this.updateUserForm = this.formBuilder.group({
      userId: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    })
  }


  createUpdatePasswordForm() {
    this.updatePasswordForm = this.formBuilder.group({
      email: ["", Validators.required],
      oldPassword: ["", Validators.required],
      newPassword: ["", Validators.required]
    })

  }

  getUserById() {
    let token: any = this.localStorageService.getToken()
    let id: number = Number(Object.values(jwtDecode(token))[0])
    this.userId = id;
    this.userService.getByUserId(id).subscribe(response => {
      this.user = response.data;
    })

  }


  updatePassword() {
    if (this.updatePasswordForm.valid) {
      let updatePassword = Object.assign({}, this.updatePasswordForm.value)
      this.userService.changePassword(updatePassword).subscribe(response => {
        this.toastrService.success(response.message, MessageModel.updateSuccess)
        this.localStorageService.removeToken();
        this.router.navigate(["/login"]);
      }, responseError => {
        this.toastrService.error(MessageModel.updateFail)
      })
    } else {
      this.toastrService.warning(MessageModel.notEmptySpace, MessageModel.cautionError);
    }
  }

}

