import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clean-slate',
  templateUrl: './clean-slate.component.html',
  styleUrls: ['./clean-slate.component.scss']
})
export class CleanSlateComponent implements OnInit {
  someCode = '$ src/app/delete-me';

  constructor() { }

  ngOnInit() {
  }

}
