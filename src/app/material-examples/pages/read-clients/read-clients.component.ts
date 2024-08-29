import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Client } from './interfaces/client.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2'

const clients: Client[] = [
  { name: "Gabriel", lastName: "Ramirez", age: 28, gender: "masculino" },
  { name: "Elias", lastName: "Maturana", age: 25, gender: "masculino" },
  { name: "Sofia", lastName: "Gomez", age: 21, gender: "femenino" },
  { name: "Valentina", lastName: "Muñoz", age: 23, gender: "femenino" },
  { name: "Gabriel", lastName: "Ramirez", age: 28, gender: "masculino" },
  { name: "Elias", lastName: "Maturana", age: 25, gender: "masculino" },
  { name: "Sofia", lastName: "Gomez", age: 21, gender: "femenino" },
  { name: "Valentina", lastName: "Muñoz", age: 23, gender: "femenino" },
  { name: "Gabriel", lastName: "Ramirez", age: 28, gender: "masculino" },
  { name: "Elias", lastName: "Maturana", age: 25, gender: "masculino" },
  { name: "Sofia", lastName: "Gomez", age: 21, gender: "femenino" },
  { name: "Valentina", lastName: "Muñoz", age: 23, gender: "femenino" },
  { name: "Gabriel", lastName: "Ramirez", age: 28, gender: "masculino" },
  { name: "Elias", lastName: "Maturana", age: 25, gender: "masculino" },
  { name: "Sofia", lastName: "Gomez", age: 21, gender: "femenino" },
  { name: "Valentina", lastName: "Muñoz", age: 23, gender: "femenino" },
]

@Component({
  selector: 'app-read-clients',
  templateUrl: './read-clients.component.html',
  styles: ``
})
export class ReadClientsComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  public displayedColumns: string[] = ['name', 'lastName', 'age', 'gender', 'edit', 'delete'];
  public dataSource = new MatTableDataSource<Client>(clients);
  public clients: Client[] = clients


  onDelete(nombreCliente: string): void {
    Swal.fire({
      title: "Eliminar cliente",
      text: `Esta seguro que desea eliminar el cliente ${nombreCliente}`,
      icon: "error"
    });
  }


}
