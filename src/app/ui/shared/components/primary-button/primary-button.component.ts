import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-button[title]',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss'],
})
export class PrimaryButtonComponent implements OnInit {

  @Input() public title: string;

  constructor() { }

  ngOnInit() {}

}