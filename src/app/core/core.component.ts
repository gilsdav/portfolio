import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { filter } from 'rxjs/operators';

import { mobile } from 'bowser';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  public isMobile = mobile;

  public title = '{{Gilsdav}}';

  public items: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/home',
      icon: 'nb-home',
      home: true
    },
    {
      title: 'Portfolio',
      icon: 'nb-gear',
      children: [
        {
          title: 'Github',
          url: 'https://github.com/gilsdav',
        },
        {
          title: 'Privacy Policy',
          url: '#',
        },
        {
          title: 'Logout',
          link: '',
        },
      ],
    },
    {
      title: 'Articles',
      icon: 'nb-list',
      children: [
        {
          title: 'Languages',
          link: '/blog/languages',
        },
        {
          title: 'Web Frameworks',
          link: '/blog/frameworks',
        },
        {
          title: 'Mobile',
          link: '/blog/mobile',
        },
        {
          title: 'Technologies',
          link: '/blog/technologies',
        },
      ]
    },
  ];

  constructor(private router: Router, private sidebarService: NbSidebarService) { }

  ngOnInit() {
    if (this.isMobile) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
          .subscribe(() => this.mobileToggle());
    }
  }

  public toggle(): boolean {
    this.sidebarService.toggle();
    return false;
  }

  private mobileToggle(): void {
    this.sidebarService.collapse();
  }

}
