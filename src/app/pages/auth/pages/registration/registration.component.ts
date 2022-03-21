import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { markFormGroupTouched } from '@app/shared/utils/form.service';
import { passwordsMatchValidator } from '@app/shared/utils/passwordMatch.service';
import { regexErrors } from '@app/shared/utils/regex';
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
  isFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initForm();
    this.initValues();
    console.log(this.form);
  }

  initValues() {
    this.loading$ = this.store.pipe(select(loadingAuthSelector));
    this.errorMsg$ = this.store.pipe(select(errorAuthSelector));
  }

  initForm() {
    this.form = this.fb.group(
      {
        displayName: [
          null,
          {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(128)],
          },
        ],
        email: [
          null,
          {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(128)],
          },
        ],
        password: [
          null,
          {
            updateOn: 'blur',
            validators: [Validators.required],
          },
        ],
        passwordRepeat: [
          null,
          {
            updateOn: 'blur',
            validators: [Validators.required],
          },
        ],
      },
      { validators: passwordsMatchValidator }
    );
  }

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.store.dispatch(
        registerAction({
          email: email,
          password: password,
        })
      );
      this.isFormSubmitted = true;
    } else {
      markFormGroupTouched(this.form);
    }
  }

  canDeactivate = () => !this.form?.dirty || this.isFormSubmitted;
}
