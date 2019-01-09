import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit, OnDestroy {

  private static alreadySeen = false;

  public showProfile: boolean;
  public showSpecs: boolean;

  private timeouts: any[];

  constructor() {
    this.showProfile = false;
    this.showSpecs = false;
  }

  ngOnInit() {
    if (ProfileCardComponent.alreadySeen) {
      this.showProfile = true;
      this.showSpecs = true;
    } else {
      this.timeouts = [
        setTimeout(() => {
          this.showProfile = true;
          ProfileCardComponent.alreadySeen = true;
        }, 2500),
        setTimeout(() => {
          this.showSpecs = true;
        }, 10000)
      ];
    }
  }

  ngOnDestroy() {
    if (this.timeouts && this.timeouts.length > 0) {
      this.timeouts.forEach(timeout => clearTimeout(timeout));
    }
  }
}
