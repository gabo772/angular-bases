import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-material',
  templateUrl: './forms.component.html',
  styles: ``
})
export class FormsComponent {

  constructor(
    private router: Router
  ) {

  }

  onLogin(): void {
    this.router.navigate(["clients"])
    localStorage.setItem("token", "asd982s8dj9aj19asd8j3a")
  }

}
