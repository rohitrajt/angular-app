import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html'
  template: '<app-server></app-server><app-server></app-server>'
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
