import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadClientsComponent } from './pages/read-clients/read-clients.component';
import { CreateClientsComponent } from './pages/create-clients/create-clients.component';
import { UpdateClientsComponent } from './pages/update-clients/update-clients.component';
import { DeleteClientsComponent } from './pages/delete-clients/delete-clients.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
    {
        path: "",
        component: SidenavComponent,
        children: [
            {
                path: "listar",
                component: ReadClientsComponent
            },
            {
                path: "create",
                component: CreateClientsComponent
            },
            {
                path: "update",
                component: UpdateClientsComponent
            },
            {
                path: "delete",
                component: DeleteClientsComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MaterialExamplesRoutingModule { }
