import { NgForm, NgModel, ValidationErrors } from "@angular/forms";

export class FormUtils {
    static getTextError( errors: ValidationErrors ) {
      for( const key of Object.keys(errors) ) {

      switch (key) {

        case 'required':
        return 'Este campo es requerido';

        case 'minlength':
        return `La nota debe tener minimo ${ errors['minlength'].requiredLength } caracteres.`;

      };
    };

    return null;
  }

  static getFieldError( control: NgModel ): string | null {
    if (!control || !control.invalid || !control.errors) return null;
    return FormUtils.getTextError(control.errors);
  };

  static isValidField(control: NgModel): boolean {
    return control?.invalid && (control?.dirty || control?.touched);
  }

  static isValidForm( form: NgForm ): boolean {
    return !form.valid
  }
}