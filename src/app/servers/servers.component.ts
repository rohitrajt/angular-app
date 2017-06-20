import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
  // template: '<app-server></app-server><app-server></app-server>'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created"
  serverName = 'TestServer';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server Was Created with Name:" + this.serverName;      
  }

  onUpdateServer(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;      
  }

}