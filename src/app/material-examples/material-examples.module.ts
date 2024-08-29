import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './components/forms/forms.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ReadClientsComponent } from './pages/read-clients/read-clients.component';
import { CreateClientsComponent } from './pages/create-clients/create-clients.component';
import { UpdateClientsComponent } from './pages/update-clients/update-clients.component';
import { DeleteClientsComponent } from './pages/delete-clients/delete-clients.component';
import { Page404Component } from './pages/page404/page404.component';
import { MaterialExamplesRoutingModule } from './material-examples-routing.module';



@NgModule({
  declarations: [
    FormsComponent,
    SidenavComponent,
    ReadClientsComponent,
    CreateClientsComponent,
    UpdateClientsComponent,
    DeleteClientsComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MaterialExamplesRoutingModule
  ],
  exports: [
    FormsComponent,
    SidenavComponent
  ]
})
export class MaterialExamplesModule { }
