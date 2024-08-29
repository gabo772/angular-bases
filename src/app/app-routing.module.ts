import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './material-examples/components/forms/forms.component';
import { Page404Component } from './material-examples/pages/page404/page404.component';
import { SidenavComponent } from './material-examples/components/sidenav/sidenav.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: FormsComponent
  },
  {
    path: "clients",
    loadChildren: () => import("./material-examples/material-examples.module").then(m => m.MaterialExamplesModule)
  },

  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
