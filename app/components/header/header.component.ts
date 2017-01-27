import { Component } from '@angular/core';

import template from "./header.html";
import * as styles from './main-header.component.scss';
styles._insertCss();

console.log("STYLES", styles._getCss());

@Component({
  template,
  selector: 'main-header'
})
export class MainHeaderComponent {
}

