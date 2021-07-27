import {Pipe, PipeTransform} from '@angular/core';
import {WordModel} from "../models/wordModel";

@Pipe({
  name: 'wordFilter'
})
export class WordPipe implements PipeTransform {

  transform(values: WordModel[], filterText: string): WordModel[] {
    if (!values || !filterText) {
      return values;
    }
    return values.filter(value =>
      value.wordName.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) ||
      value.wordDescription.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) ||
      value.wordUseArea.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()));

  }

}
