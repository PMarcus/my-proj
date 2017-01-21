import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ContainerComponent } from './components/container/container.component';

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <jumbotron></jumbotron>
    <container></container>
  `,
})

export class AppComponent  {}
