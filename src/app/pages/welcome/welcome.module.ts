import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { TranslateModule } from '@ngx-translate/core';
import { TimerModule } from '@app/shared/components/timer/timer.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, WelcomeRoutingModule, TranslateModule, TimerModule],
})
export class WelcomeModule {}
