import { Component, OnInit } from '@angular/core';
import { signOutAction } from '@app/pages/auth/store/auth.actions';
import { isLoggedInAuthSelector } from '@app/pages/auth/store/auth.selectors';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInAuthSelector));
  }

  signOut() {
    this.store.dispatch(signOutAction());
  }
}
