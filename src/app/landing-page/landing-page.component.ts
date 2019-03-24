import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  option;
  inputSearch;
  placeholder = 'לקוח';
  
  processes = [];

  constructor() {
  }

  async ngOnInit() {
    // TODO: call to get processes array to be displayed on table 
  }

  search(value: number) {
    // TODO: Search service

  }

  onSelectionChange(matRadioChange: MatRadioChange) {
    this.placeholder = matRadioChange.value;

  }

}
