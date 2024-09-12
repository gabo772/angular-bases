import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Client } from './interfaces/client.interface';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2'
import { MatDialog } from '@angular/material/dialog';
import { UpdateClientsComponent } from '../update-clients/update-clients.component';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { ClientService } from './services/client-service.service';

const clients: Client[] = []




@Component({
  selector: 'app-read-clients',
  templateUrl: './read-clients.component.html',
  styles: ``
})
export class ReadClientsComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  public displayedColumns: string[] = ['name', 'lastName', 'email', 'createdAt', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<Client>(clients);
  public clients: Client[] = clients;
  public loader = false;


  constructor(public dialog: MatDialog, private clientService: ClientService) {
  }


  ngOnInit(): void {


  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(client: Client): void {

    const dialogRef = this.dialog.open(UpdateClientsComponent, {
      data: client,
      height: "60%",
      width: "30%"
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("Dialog was closed");

    })

  }



  onDelete(nombreCliente: string): void {
    Swal.fire({
      title: "Eliminar cliente",
      text: `Esta seguro que desea eliminar el cliente ${nombreCliente}`,
      icon: "error"
    });
  }


  buscarClientes(valor: string) {
    this.loader = true;
    setTimeout(() => {
      this.clientService.obtenerClientes().subscribe((result) => {
        this.dataSource.data = result;
        console.log(result);
        this.loader = false;
        this.onFilterBy(valor);
      })
    }, 2000)


  }



  onFilterBy(value: string) {
    this.dataSource.filter = value;

  }






}

class DynamicDataSource extends DataSource<Client> {

  private _dataStream = new ReplaySubject<Client[]>

  constructor(initData: Client[]) {
    super();
    this.setData(initData);
  }

  override connect(collectionViewer: CollectionViewer): Observable<readonly Client[]> {
    return this._dataStream;
  }
  override disconnect(collectionViewer: CollectionViewer): void {

  }

  setData(data: Client[]) {
    this._dataStream.next(data);
  }

}

export class CustomPaginator extends MatPaginatorIntl {

  override itemsPerPageLabel: string = "Elementos por página";
  override firstPageLabel: string = "Primera página";
  override previousPageLabel: string = "Anterior";
  override nextPageLabel: string = "Siguiente";
  override lastPageLabel: string = "Ultima página";

  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    const startIndex = page * pageSize;
    const endIndex = Math.min(startIndex + pageSize, length);
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };

}
