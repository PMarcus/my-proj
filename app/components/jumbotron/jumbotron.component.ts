import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})

export class JumbotronComponent {
  private jumbotronHeading:string;
  private jumbotronText:string;
  private jumbotronBtnText:string;
  private jumbotronBtnUrl:string;

  constructor(){
    this.jumbotronHeading = 'Welcome';
    this.jumbotronText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque purus vitae tincidunt sollicitudin. Sed ullamcorper tempus nisl quis volutpat. Cras pharetra metus metus, vel semper magna tempus id.';
    this.jumbotronBtnText = 'Read more';
    this.jumbotronBtnUrl = 'http://test.com';
  }
}
