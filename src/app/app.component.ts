import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private iconLibraries: NbIconLibraries
  ) {
    this.iconLibraries.registerFontPack('devicon', {
      packClass: 'colored',
      iconClassPrefix: 'devicon'
    });
  }

}
