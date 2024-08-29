import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-material',
  templateUrl: './sidenav.component.html',
  styles: ``
})
export class SidenavComponent {

  public options = [
    { label: "Listar", icon: "format_list_bulleted", path: "listar" },
    { label: "Crear", icon: "add_circle", path: "create" },
    //{ label: "Modificar", icon: "edit", path: "update" },
    //{ label: "Eliminar", icon: "delete", path: "delete" },
  ]

  constructor(private router: Router) { }

  onLogout(): void {
    this.router.navigate(["login"])
  }

}
