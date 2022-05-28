import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AuthServiceNav } from '../auth/auth.service';
import { signOutAction } from '../auth/store/auth.actions';
import { isAuthSelector } from '../auth/store/auth.selectors';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss'],
})
export class Header2Component implements OnInit, OnDestroy {
  isLoggedIn$: Observable<boolean>;

  toggleMenu: boolean = false;
  toggleMobileMenu: boolean = false;
  removeNavbarMobile = true;

  onDestroy$ = new Subject();

  constructor(
    private store: Store,
    public translate: TranslateService,
    private authService: AuthServiceNav
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.isLoggedIn$ = this.store.pipe(select(isAuthSelector));

    this.translate.addLangs(['en', 'de', 'hr']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|de|hr/) ? browserLang : 'en');

    this.authService.isLoggedIn
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data) => (this.removeNavbarMobile = data));
  }

  onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

  onToggleMobileMenu() {
    this.toggleMobileMenu = !this.toggleMobileMenu;
  }

  signOut() {
    this.removeNavbarMobile = false;
    this.store.dispatch(signOutAction());
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(null);
    this.onDestroy$.complete();
  }
}
