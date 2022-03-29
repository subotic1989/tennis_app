import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';

import { FormFieldModule } from '@app/shared/library/controls/form-field/form-field.module';
import { InputModule } from '@app/shared/library/controls/input/input.module';
import { PasswordModule } from '@app/shared/library/controls/password/password.module';
import { ErrorModule } from '@app/shared/library/indicators/error/error.module';
import { LoadingModule } from '@app/shared/library/indicators/loading/loading.module';
import { TranslateModule } from '@ngx-translate/core';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    PasswordModule,
    ButtonPrimaryModule,
    LoadingModule,
    ErrorModule,
    TranslateModule,
  ],
})
export class RegistrationModule {}
