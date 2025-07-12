import { Component, inject, OnInit, signal } from '@angular/core';  
import { toSignal } from '@angular/core/rxjs-interop';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-MatFormFieldModule';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormControl, FormGroupDirective, FormsModule, NgForm } from '@angular/forms';
import { map } from 'rxjs';

import { Note } from '../../../shared/models/note';
import { FormUtils } from '../../../utils/form-utils';
import { NotesService } from '../../../shared/services/notes.service';

export class MyErrorStateMatcher implements MyErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-note-page',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterModule ],
  templateUrl: './add-note-page.component.html'
})
export class AddNotePageComponent implements OnInit {
  
  noteService = inject(NotesService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute)
  
  noteId = toSignal(
    this.activatedRoute.params.pipe(
      map(params => params['id'])
    )
  );
  
  model = new Note('','');
  formUtils = FormUtils
  matcher = new MyErrorStateMatcher();
  note = signal<Note>(null);

  setFormValue (note: Note) {
    this.model = note;
  }

  ngOnInit(): void {
    if (this.noteId != null) {
      this.note.set(this.noteService.getNoteById(this.noteId()))
    }
    if (this.note() != null) {
      this.model = this.note()
    }
  }

  onSubmit() {

    if (!this.model.title && !this.model.description) {
      return
    }

    if (!this.noteId() || !this.noteService.getNoteById(this.noteId())) {
      this.noteService.addNote(this.model);
    } else {
      this.noteService.updateNote(this.model, this.noteId());
    }
    

  }

}
