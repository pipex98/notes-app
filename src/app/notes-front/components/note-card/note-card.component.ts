import { Component, inject, input } from '@angular/core';
import { Note } from '../../../add-note/models/note';
import { NotesService } from '../../../shared/services/notes.service';
import { RouterModule } from '@angular/router';

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
