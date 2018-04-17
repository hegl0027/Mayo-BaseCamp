import { Component, OnInit } from '@angular/core';
import { DialogService } from './comp/services/dialog.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  constructor(public dialog: DialogService) { }

  ngOnInit() {
  }

}
