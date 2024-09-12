import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../read-clients/interfaces/client.interface';


@Component({
  selector: 'app-update-clients',
  templateUrl: './update-clients.component.html',
  styles: ``
})
export class UpdateClientsComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateClientsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
