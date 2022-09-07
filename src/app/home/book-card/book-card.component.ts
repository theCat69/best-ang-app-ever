import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { commonMaterialModules } from 'src/app/common';
import { Book } from 'src/app/store';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, commonMaterialModules, MatCardModule],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent implements OnInit {

  @Input()
  book!: Book
  
  @Output() 
  deleteBookEvent = new EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  deleteBook(id: number) {
    this.deleteBookEvent.emit(id);
  }

}
