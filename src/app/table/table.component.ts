import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BonfireStore, BonfireStoreService, FromStore } from 'bonfire-store';
import { Store } from '../app.module';
import { EditFoodDialogComponent } from '../shared/components/edit-food-dialog/edit-food-dialog.component';
import { Food, TableDataSource } from './table-datasource';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit, OnInit {
  @FromStore('food') food$: BonfireStore.FromStore<Food>;

  constructor(
    private storeService: BonfireStoreService<Store>,
    private dialog: MatDialog
  ) { }


  ngOnInit() {

  }

  openDialog(food: Food, index: number) {
    const dialogRef = this.dialog.open<EditFoodDialogComponent, { food: Food, index: number }>(EditFoodDialogComponent, {
      data: {
        food,
        index
      }
    });

    dialogRef.afterClosed()
      .pipe(
        filter(r => !!r)
      )
      .subscribe((res: { value: Food, shouldDelete: boolean }) => {
        if (res.shouldDelete) {
          this.storeService.store.food.splice(index, 1);
        } else {
          this.storeService.store.food[index] = res.value;
        }
      });


  }


  ngAfterViewInit() {
  }
}
