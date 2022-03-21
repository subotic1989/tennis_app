import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPlayerRoutingModule } from './new-player-routing.module';
import { NewPlayerComponent } from './new-player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonPrimaryModule } from '@app/shared/library/buttons/button-primary/button-primary.module';
import { ButtonSecondaryModule } from '@app/shared/library/buttons/button-secondary/button-secondary.module';
import { FormFieldModule } from '@app/shared/library/controls/form-field/form-field.module';
import { InputModule } from '@app/shared/library/controls/input/input.module';
import { TextAreaModule } from '@app/shared/library/controls/text-area/text-area.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NewPlayerComponent],
  imports: [
    CommonModule,
    NewPlayerRoutingModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    ButtonPrimaryModule,
    RouterModule,
    TextAreaModule,
    ButtonSecondaryModule,
    TranslateModule,
  ],
})
export class NewPlayerModule {}
