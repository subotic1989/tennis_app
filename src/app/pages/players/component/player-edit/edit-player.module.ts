import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPlayerComponent } from './edit-player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';
import { FormFieldModule } from '@app/shared/library/controls/form-field/form-field.module';
import { InputModule } from '@app/shared/library/controls/input/input.module';
import { RouterModule } from '@angular/router';
import { TextAreaModule } from '@app/shared/library/controls/text-area/text-area.module';
import { ButtonSecondaryModule } from '@app/shared/library/buttons/button-secondary/button-secondary.module';
import { ButtonDangerModule } from '@app/shared/library/buttons/button-danger/button-danger.module';
import { DialogModule } from '@app/shared/components/dialog/dialog.module';

@NgModule({
  declarations: [EditPlayerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    RouterModule,
    TextAreaModule,
    ButtonPrimaryModule,
    ButtonSecondaryModule,
    ButtonDangerModule,
    DialogModule,
  ],
  exports: [EditPlayerComponent],
})
export class EditPlayerModule {}
