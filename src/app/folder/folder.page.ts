import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  public folder: string;
  public calcItems: Array<string>;
  public calcActions: Array<string>;
  public calcPlusActions: Array<string>;
  public displayResult: string;
  public displayStorage: string;
  public valueResult: number;
  public valueStorage: number;
  public showPlusAction: boolean;
  public turnDecimal: boolean;
  public selectedAction: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.calcItems = ['(', ')', 'C', '%', '**0.5', '**', '7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', 'x'];
    this.calcActions = ['/', '*', '-', '+'];
    this.displayResult = '0';
    this.displayStorage = '';
    this.valueResult = 0;
    this.valueStorage = 0;
    this.showPlusAction = false;
    this.selectedAction = '';
  }

  public setWritingValue(value, act) {
    if(act === 'erase') {
      console.log(this.displayResult.length)
      this.displayResult = this.displayResult.length <= 1 ? '0' : this.displayResult.substring(0, (this.displayResult.length - 1));
      return
    }
    if(this.displayResult === '0') this.displayResult = ''
    this.displayResult += value
  }

  public setStorageValue() {
    this.displayStorage = eval(this.displayResult);
    this.displayResult = this.displayStorage;
  }

  public clearDisplay() {
    this.displayStorage = '';
    this.displayResult = '0';
  }

}
