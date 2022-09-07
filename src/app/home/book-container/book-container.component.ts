import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { commonModules } from 'src/app/common';
import { AppState, Book, removeBook } from 'src/app/store';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [commonModules, BookCardComponent, RouterModule],
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookContainerComponent implements OnInit {

  books$!: Observable<Book[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.books$ = this.store.select('books');
  }

  deleteBook(id: number) {
    this.store.dispatch(removeBook({ id: id }));
  }
}
