import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';
import { filter } from 'rxjs/operators';
import { isMobile } from '../../../helpers/browser.helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor(
    private router: Router,
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit(): void {
    if (isMobile) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(() => this.mobileToggle());
    }
  }

  public toggle(): boolean {
    this.sidebarService.toggle(true);
    return false;
  }

  private mobileToggle(): void {
    this.sidebarService.collapse();
  }

}
