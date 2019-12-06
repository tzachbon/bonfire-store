import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { BonfireStore, BonfireStoreService, FromStore } from 'bonfire-store';
import { Store } from '../app.module';
import { Food, TableDataSource } from './table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<Food>;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = [];
  @FromStore('food') food$: BonfireStore.FromStore<Food>;

  constructor(
    private storeService: BonfireStoreService<Store>,
  ) { }


  ngOnInit() {
    // this.displayedColumns = ['name', 'desc'];
    // const food = this.storeService.store.food;
    // this.dataSource = new TableDataSource(food);

    // const food$ = this.storeService.get$('food')
    //   .pipe(
    //     delay(0)
    //   )
    //   .subscribe(data => {
    //     // this.dataSource = new TableDataSource(data);
    //     // this.table.dataSource = this.dataSource;
    //     this.cd.detectChanges();
    //     // this.paginator._changePageSize(this.paginator.pageSize);
    //   });



  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
