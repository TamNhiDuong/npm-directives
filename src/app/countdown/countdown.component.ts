import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-simple-count-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  constructor() {}

  public code0: string = `<div simpleCountdown [dateTo]="1981242400"></div>`;

  public code1: string = `
    <div
      simpleCountdown
      [dateTo]="1981242400"
      [language]="'fr'"
      [styles]="
        '
        font-size: 26px;
        text-align:center;
        color: #FFF;
        background-color: #3F51B5;
        padding: 18px 13px;
        font-weight: bold;
        min-width:40px;
        margin:0 1px;
      '
      "
    ></div>`;
  public code2: string = `
    <div
      simpleCountdown
      [dateTo]="181242400"
      [endMessage]="'my custom end message'"
      [styles]="
        '
        font-size: 26px;
        text-align:center;
        color: #FFF;
        background-color: #3F51B5;
        padding: 18px 13px;
        font-weight: bold;
        min-width:40px;
        margin:0 1px;
      '
      "
    ></div>`;
  public code3: string = `
  <div
    simpleCountdown
    [dateTo]="1681242400"
    [reactive]="false"
    [styles]="
      '
      font-size: 26px;
      text-align:center;
      color: #FFF;
      background-color: #3F51B5;
      padding: 18px 13px;
      font-weight: bold;
      min-width:40px;
      margin:0 1px;
    '
    "
  ></div>`;

  ngOnInit() {}
}
