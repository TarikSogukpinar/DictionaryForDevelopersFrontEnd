import {Component, OnInit} from '@angular/core';
import {WordModel} from "../../models/wordModel";
import {WordService} from "../../services/word.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  words: WordModel[];
  dataLoaded = false;
  filterText= "";

  constructor(private wordService: WordService,
              private activatedRouter: ActivatedRoute,
              private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllWords();
  }

  getAllWords() {
    // @ts-ignore
    this.wordService.getWords().subscribe((response => {
      this.words = response.data;
      this.dataLoaded = true;
    }));
  }

}
