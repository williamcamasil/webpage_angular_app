import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog, {
      backdropClass: 'backdropBackground'
    });
  }

}

@Component({
  selector: 'modal.component.dialog',
  templateUrl: 'modal.component.dialog.html',
  styleUrls: ['./modal.component.dialog.css']
  // styleUrls: ['./modal.component.css']
})
export class DialogElementsExampleDialog {

  tryAgain() {
    console.log("TENTANDO....")
  }
}
