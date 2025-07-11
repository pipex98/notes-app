import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-note-layout',
  imports: [RouterModule, NavbarComponent],
  templateUrl: './note-layout.component.html',
})
export class NoteLayoutComponent { }
