import { Component } from '@angular/core';

import template from "./header.html";
import * as styles from './main-header.component.scss';

styles._insertCss();

@Component({
  template,
  selector: 'main-header'
})
export class MainHeaderComponent {
}

