import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  similarity: number;
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {similarity:1, id: 998742126, name: 'The New Drawing on the Right Side of the Brain'},
  {similarity:2, id: 998742456, name: 'The Story of Art'},
  {similarity:3, id: 998742415, name: 'Ways of Seeing'},
  {similarity:4, id: 998742564, name: 'Art and Fear: Observations on the Perils (and Rewards) of Artmaking'},
  {similarity:5, id: 998742984, name: 'Concerning the Spiritual in Art '},
  {similarity:6, id: 998743510, name: 'History of Beauty'},
  {similarity:7, id: 998749845, name: 'The Goldfinch'},
  {similarity:8, id: 998742312, name: 'M.C. Escher: The Graphic Work'},
  {similarity:9, id: 998749849, name: 'Understanding Comics: The Invisible Art'},
  {similarity:10, id: 998742225, name: 'The Diary of Frida Kahlo: An Intimate Self-Portrait'},
  {similarity:11, id: 998741111, name: 'Art Through the Ages'},
  {similarity:12, id: 998897894, name: 'Girl with a Pearl Earring'},
  {similarity:13, id: 998732123, name: 'The Shock of the New'},
  {similarity:14, id: 998765465, name: 'Just Kids'},
  {similarity:15, id: 998749879, name: 'History of Art'},
  {similarity:16, id: 998765123, name: 'The Lives of the Artists'},
  {similarity:17, id: 998742453, name: 'The Art Forger'},
  {similarity:18, id: 998982451, name: 'Leonardo da Vinci'},
  {similarity:19, id: 998562456, name: 'Vincent Van Gogh: The Complete Paintings'},
  {similarity:20, id: 998756411, name: 'The Agony and the Ecstasy'},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'similarity':  return compare(+a.similarity, +b.similarity, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
