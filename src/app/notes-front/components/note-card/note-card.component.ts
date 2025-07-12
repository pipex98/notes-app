import { Component, inject, input } from '@angular/core';

import { NotesService } from '../../../shared/services/notes.service';
import { RouterModule } from '@angular/router';
import { Note } from '../../../shared/models/note';

@Component({
  selector: 'app-note-card',
  imports: [ RouterModule ],
  templateUrl: './note-card.component.html',
})
export class NoteCardComponent { 

  notesService = inject(NotesService);

  note = input.required<Note>();

  deleteNote(id:string) {
    this.notesService.deleteNote(id);
  }

  //TODO: updateNote

}
