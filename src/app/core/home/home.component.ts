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
        `Je suis un dévelopeur Web et Mobile mais mon post actuel est "Technical Lead Architect Front-End".`,
        `Merci pour votre visite sur mon site !`,
        `Je vais essayer d'y mettre mes références.`,
      ],
      loop: false,
      backDelay:  1500,
      backSpeed:  30,
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
