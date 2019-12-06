// prettier-ignore
import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { EditFoodDialogComponent } from '../edit-food-dialog/edit-food-dialog.component';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})
export class EditFoodComponent implements OnDestroy {

  private destroy$ = new Subject<void>();

  constructor(public dialog: MatDialog) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditFoodDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed()
      .pipe(
        takeUntil(this.destroy$))
      .subscribe(result => {
        console.log('The dialog was closed', result);
      });
  }

}
