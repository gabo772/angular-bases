
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.iterface';

@Component({
  selector: 'app-list-dbz',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponentDbz {

  @Output()
  onDeleteById: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = []

  onDeleteCharacter(id: string): void {
    this.onDeleteById.emit(id);

  }

}
