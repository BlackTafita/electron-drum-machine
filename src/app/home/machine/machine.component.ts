import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {

  active: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.active = !this.active;
  }

}
