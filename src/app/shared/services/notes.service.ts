import { effect, Injectable, signal } from '@angular/core';
import { Note } from '../../add-note/models/note';

const loadFromLocalStorage = (): Note[] => {
  const notes = localStorage.getItem('notes');
  return notes ? JSON.parse(notes): [];
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes = signal<Note[]>(loadFromLocalStorage());
  
  saveToLocalStorage = effect(() => {
    localStorage.setItem('notes', JSON.stringify(this.notes()));
  });

  addNote(note: Note) {
    this.notes.update((list) => [...list, note]);
  }

  deleteNote(id:string) {
    this.notes.update((notes) => notes.filter(notes => notes.id !== id));
  }

  getNoteById(id:string) : Note {
    return this.notes().find(note => note.id == id)
  }

  updateNote(updatedNote: Note, id:string) {
    
    const currentNotes = this.notes();
    const index = currentNotes.findIndex(n => n.id === id)

    if (index !== -1) {
      const notes = [...currentNotes];
      notes[index] = updatedNote;
      this.notes.set(notes);
    }

  }

}
