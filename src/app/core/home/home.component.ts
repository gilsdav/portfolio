import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { init } from 'ityped';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('one') one: ElementRef;
  @ViewChild('two') two: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initOne();
  }

  private initOne() {
    init(this.one.nativeElement, {
      showCursor: true,
      strings: [
        `Bonjour, je m'appel David Gilson.`,
        `Bienvenue et merci de votre visite sur mon site web personnel.`,
        `Je suis actuellement développeur Web et Mobile et spécialisé dans le Front-End ainsi que les technologies Microsoft.`,
        `Bonne visite`,
        // `Hello, I'm David Gilson.`,
        // `Welcome and thanks to visit my personal website.`,
        // `I'm curently a Web and Mobile developer specialized in Front-End and Microsoft technologies.`,
        // `Enjoy`
      ],
      loop: false,
      backDelay:  1500,
      backSpeed:  0,
      typeSpeed: 50
      // onFinished: () => this.initTwo()
    });
  }

  private initTwo() {
    init(this.two.nativeElement, {
      showCursor: true,
      strings: [
        `Je suis un dévelopeur Web et Mobile.`
      ],
      loop: false,
    });
  }

}
