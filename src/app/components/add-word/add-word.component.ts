import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WordService} from "../../services/word.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent implements OnInit {
  dataLoaded = false;
  addedWordForm: FormGroup

  constructor(private httpClient: HttpClient,
              private toastrService: ToastrService,
              private formBuilder: FormBuilder,
              private wordService: WordService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.addWordForm();
  }

  addWordForm() {
    this.addedWordForm = this.formBuilder.group({
      wordName: ["", Validators.required],
      wordDescription: ["", Validators.required],
      wordUseArea: ["", Validators.required],
    })
  }

  addWord() {
    if (this.addedWordForm.valid) {
      let wordModel = Object.assign({}, this.addedWordForm.value)
      this.wordService.addWords(wordModel).subscribe(response => {
        this.toastrService.success(response.message, 'Kelime başarı ile eklendi!')
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
      this.toastrService.error("Boş alan bırakmamalısınız!");
    }
  }

}
