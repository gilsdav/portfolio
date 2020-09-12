import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private static alreadySeen = false;

  public showProfile: boolean;
  public showSpecs: boolean;

  private timeouts: any[];
  private delay = 35000;

  constructor() {
    this.showProfile = false;
    this.showSpecs = false;
  }

  ngOnInit() {
    if (ProfileComponent.alreadySeen) {
      this.showProfile = true;
      this.showSpecs = true;
    } else {
      this.timeouts = [
        setTimeout(() => {
          this.showProfile = true;
          ProfileComponent.alreadySeen = true;
        }, this.delay),
        setTimeout(() => {
          this.showSpecs = true;
        }, this.delay + 1000)
      ];
    }
  }

  ngOnDestroy() {
    if (this.timeouts && this.timeouts.length > 0) {
      this.timeouts.forEach(timeout => clearTimeout(timeout));
    }
  }
}
