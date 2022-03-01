import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { markFormGroupTouched } from '@app/shared/utils/form';
import { regex, regexErrors } from '@app/shared/utils/regex';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from '../../store/auth.actions';
import {
  errorAuthSelector,
  loadingAuthSelector,
} from '../../store/auth.selectors';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  loading$: Observable<boolean>;
  errorMsg$: Observable<string>;

  regexErrors = regexErrors;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initForm();
    this.initValues();
  }

  initValues() {
    this.loading$ = this.store.pipe(select(loadingAuthSelector));
    this.errorMsg$ = this.store.pipe(select(errorAuthSelector));
  }

  initForm() {
    this.form = this.fb.group({
      email: [
        null,
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.maxLength(128),
            Validators.pattern(regex.email),
          ],
        },
      ],
      password: [
        null,
        {
          updateOn: 'change',
          validators: [Validators.required],
        },
      ],
      // passwordRepeat: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const request = {
        email: this.form.value.email,
        password: this.form.value.password,
      };
      this.store.dispatch(registerAction({ request }));
      this.form.reset();
    } else {
      markFormGroupTouched(this.form);
    }
  }
}
