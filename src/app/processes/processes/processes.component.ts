import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-processes',
  templateUrl: './processes.component.html',
  styleUrls: ['./processes.component.css']
})
export class ProcessesComponent implements OnInit {

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
