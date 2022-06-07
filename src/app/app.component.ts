import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { initAction, isAdmin } from './pages/auth/store/auth.actions';
import { CheckAdminService } from './shared/utils/checkAdmin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store,
    private router: Router,
    private checkAdmin: CheckAdminService
  ) {}

  ngOnInit(): void {
    this.initApp();
  }

  initApp() {
    this.store.dispatch(initAction());
    this.router.navigate(['home']);

    this.checkAdmin.check().subscribe((data) => {
      this.store.dispatch(isAdmin({ isAdmin: data }));
    });
  }
}
