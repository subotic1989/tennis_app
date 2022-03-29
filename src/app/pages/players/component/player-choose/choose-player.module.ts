import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoosePlayerComponent } from './choose-player.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ChoosePlayerComponent],
  imports: [CommonModule, TranslateModule],
  exports: [ChoosePlayerComponent],
})
export class ChoosePlayerModule {}
