import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsFormSavedGourd } from '@app/guards/is-form-saved.guard';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    canDeactivate: [IsFormSavedGourd],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
