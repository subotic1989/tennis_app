import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
})
export class EditPlayerComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initValues();
  }

  initValues() {}

  initForm() {
    this.form = this.fb.group({
      email: [
        null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(128)],
        },
      ],
    });
  }

  onSubmit() {
    // if (this.form.valid) {
    //   const request = {
    //     email: this.form.value.email,
    //     password: this.form.value.password,
    //   };
    //   this.store.dispatch(loginAction({ request: request }));
    //   this.isFormSubmitted = true;
    // } else {
    //   markFormGroupTouched(this.form);
    // }
  }

  onSave() {}

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
