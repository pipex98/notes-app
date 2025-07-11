import { Component, inject } from '@angular/core';
import { NoteCardComponent } from '../../components/note-card/note-card.component';
import { NotesService } from '../../../shared/services/notes.service';

@Component({
  selector: 'app-note-page',
  imports: [NoteCardComponent],
  templateUrl: './note-page.component.html',
})
export class NotePageComponent {

  notesService = inject(NotesService);

  

 }
