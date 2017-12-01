import { FormControl } from '@angular/forms';

export class EmailValidator {

  static isValid(control: FormControl) {
    // Email regular expression
    const regExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);

    if (regExp){
      return null;
    }

    return {
      "invalidEmail": true
    };
  }
}
