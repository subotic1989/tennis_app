import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { signOutAction } from '../auth/store/auth.actions';
import { isAuthSelector } from '../auth/store/auth.selectors';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.scss'],
})
export class Header2Component implements OnInit {
  isLoggedIn$: Observable<boolean>;

  toggleMenu: boolean = false;
  toggleMobileMenu: boolean = false;

  constructor(private store: Store, public translate: TranslateService) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.isLoggedIn$ = this.store.pipe(select(isAuthSelector));

    this.translate.addLangs(['en', 'de', 'hr']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|de|hr/) ? browserLang : 'en');
  }

  onToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

  onToggleMobileMenu() {
    this.toggleMobileMenu = !this.toggleMobileMenu;
  }

  signOut() {
    this.store.dispatch(signOutAction());
  }
}
