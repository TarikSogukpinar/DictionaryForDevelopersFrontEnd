import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ContactService} from "../../services/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactAdd: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private toastrService: ToastrService,
              private contactService: ContactService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.sendContactForm();
  }

  sendContactForm() {
    this.contactAdd = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      message: ["", Validators.required]
    })
  }

  addContact() {
    if (this.contactAdd.valid) {
      let contactModel = Object.assign({}, this.contactAdd.value)

      this.contactService.sendContact(contactModel).subscribe(response => {
        this.toastrService.success("Mesaj başarı ile gönderildi. Ana Sayfaya Yönlendiriliyorsunuz!")
        setTimeout(() => {
          return this.router.navigate(['/']);
        }, 5000);

      })
    } else {
      this.toastrService.error("Eksik alan bırakmamalısınız.", 'Dikkat')
    }
  }

}
