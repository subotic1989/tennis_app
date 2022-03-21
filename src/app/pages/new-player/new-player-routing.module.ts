import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedPlayerNewGuard } from '@app/guards/unsavedPlayerNew.guard';
import { NewPlayerComponent } from './new-player.component';

const routes: Routes = [
  {
    path: '',
    component: NewPlayerComponent,
    canDeactivate: [UnsavedPlayerNewGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPlayerRoutingModule {}
