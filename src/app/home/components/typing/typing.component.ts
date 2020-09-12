import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent implements AfterViewInit {

  public typed: Typed;

  constructor() { }

  ngAfterViewInit(): void {
    this.typed = new Typed('#typed', {
      strings: [
        `Bonjour,`,
        `Bienvenue et merci pour votre visite sur mon site web personnel.`,
        `Je suis développeur, architecte technique et formateur.`,
        `Mais ma vie de dev ne s'arrête pas aux bureaux !`,
        `Car je suis passioné par l'<strong>open source</strong> et les nouveaux nés de Microsoft.`,
        `Mes soirées sont annimées par des tests poussés des nouveaux frameworks^500`,
        `Mes soirées sont annimées par des tests poussés des nouvelles techonologies qui peuvent aider au développement^700`,
        `Mes soirées sont annimées par des tests...^500`,
        `Ici, vous trouverez quelques supports de formations ainsi que des moyents de contact.^2000`,
        `Bonne visite ｡^‿^｡^10000`,
      ],
      typeSpeed: 30,
      startDelay: 500,
      loop: true,
      loopCount: 2
    });
  }

}
