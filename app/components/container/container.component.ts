import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'container',
  templateUrl: 'container.component.html'
})

export class ContainerComponent {
  private containerHeading:string;
  private containerText:string;
  private containerBtnText:string;
  private containerBtnUrl:string;
  private containerFooterText:string;

  constructor(){
    this.containerHeading = 'Heading';
    this.containerText = 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.';
    this.containerBtnText = 'Read more';
    this.containerBtnUrl = 'http://test.com';
    this.containerFooterText = '© 2017 Marcus Persson'
  }
}
