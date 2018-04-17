import { Component, OnInit } from '@angular/core';
import '!svg-sprite-loader!element.ui/modules/assets/icons/font-awesome/fire.svg';
import '!svg-sprite-loader!element.ui/modules/assets/icons/font-awesome/chain.svg';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
