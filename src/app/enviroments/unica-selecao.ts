import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validadorUnicaSelecao: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const formGroup = control as FormGroup;
  let selectedCount = 0;

  Object.keys(formGroup.controls).forEach(key => {
    if (formGroup.get(key)?.value) {
      selectedCount++;
    }
  });

  return selectedCount > 1 ? { 'multipleSelection': true } : null;
};