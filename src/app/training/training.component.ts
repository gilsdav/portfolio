import { Component, OnInit } from '@angular/core';
import { training } from '../../../data/training.json';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  public training = training;

  constructor() { }

  ngOnInit(): void {
  }

}
