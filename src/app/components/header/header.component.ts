import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { signOutAction } from '@app/pages/auth/store/auth.actions';
import {
  isAdminSelector,
  isAuthSelector,
} from '@app/pages/auth/store/auth.selectors';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.isLoggedIn$ = this.store.pipe(select(isAuthSelector));
    this.isAdmin$ = this.store.pipe(select(isAdminSelector));
  }

  signOut() {
    this.store.dispatch(signOutAction());
  }
}
