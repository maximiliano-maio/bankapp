import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-processes-table',
  templateUrl: './processes-table.component.html',
  styleUrls: ['./processes-table.component.css']
})
export class ProcessesTableComponent {
  

  @Input('processes') processes: any[] = [];
  dataSource: any[];

  displayedColumns: string[] = ['process', 'status', 'task', 'clientId', 'clientName', 'system'];

  constructor() { 
    this.dataSource = this.processes;
  }

  
}

// TESTING
const TEST_PROCESS = [
  {
    process: '100',
    status: 'פתיחה',
    task: 'פתיחת חשבון',
    clientId: '100200300',
    clientName: 'גון דאנילס',
    system: 'בנקאפפ'
  },
  {
    process: '101',
    status: 'פתיחה',
    task: 'פתיחת חשבון',
    clientId: '14567800',
    clientName: 'משה כץ',
    system: 'בנקאפפ'
  },
  {
    process: '102',
    status: 'פתיחה',
    task: 'פתיחת חשבון',
    clientId: '11134300',
    clientName: 'ישראל ישראלי',
    system: 'בנקאפפ'
  }
];
