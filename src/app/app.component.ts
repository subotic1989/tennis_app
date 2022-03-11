import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { initAction } from './pages/auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.initApp();
  }

  initApp() {
    this.store.dispatch(initAction());
    this.router.navigate(['/home']);
  }
}
