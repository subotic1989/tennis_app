import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsFormSavedGourd } from '@app/guards/is-form-saved.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, canDeactivate: [IsFormSavedGourd] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
