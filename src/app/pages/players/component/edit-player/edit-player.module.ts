import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPlayerComponent } from './edit-player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';
import { FormFieldModule } from '@app/shared/library/controls/form-field/form-field.module';
import { InputModule } from '@app/shared/library/controls/input/input.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EditPlayerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    ButtonPrimaryModule,
    RouterModule,
  ],
  exports: [EditPlayerComponent],
})
export class EditPlayerModule {}
