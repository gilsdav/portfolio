import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent {

  public title = '{{Gilsdav}}';

  public items: NbMenuItem[] = [
    {
      title: 'Qui suis-je ?',
      link: '/home',
      icon: 'person-outline',
      home: true
    },
    {
      title: 'Mes comptes',
      icon: 'email-outline',
      children: [
        {
          title: 'Github',
          url: 'https://github.com/gilsdav',
          icon: 'github-outline',
        },
        {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/david-gilson-innovate/',
          icon: 'linkedin-outline',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/GilsonDavid5',
          icon: 'twitter-outline',
        }
      ]
    },
    {
      title: 'Formations',
      icon: 'settings-2-outline',
      link: '/training'
    },
    {
      title: 'Wetry.tech (blog)',
      icon: 'radio-outline',
      url: 'https://wetry.tech'
    }
  ];

  constructor() { }

}
