import { v4 as uuid } from 'uuid';

export class Note {
  public id: string;
  public title: string;
  public description: string;

  constructor(title: string, description: string) {
    this.id = uuid();
    this.title = title;
    this.description = description;
  }
}