import { FormGroup } from '@angular/forms';

export function passwordsMatchValidator(group: FormGroup): {
  [key: string]: boolean;
} {
  const password = group.get('password')?.value;
  const passwordRepeat = group.get('passwordRepeat')?.value;

  return passwordRepeat && password !== passwordRepeat
    ? { repeat: true }
    : null;
}

// export function passwordsMatchValidator(first, second): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const password = control.get(first)?.value;
//     const confirmPassword = control.get(second)?.value;

//     if (password && confirmPassword && password !== confirmPassword) {
//       return { repeat: true };
//     } else {
//       return null;
//     }
//   };
// }
