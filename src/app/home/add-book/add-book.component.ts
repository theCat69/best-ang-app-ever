import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { commonModules } from 'src/app/common';
import { addBook, AppState, Book } from 'src/app/store';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [commonModules, MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookComponent implements OnInit {

  bookForm!: FormGroup;

  idCountHolder = 5;

  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      id: 0,
      author: [''],
      picture: [''],
      synopsis: [''],
      title: [''],
      year: 0
    });
  }

  addBook() {
    const book = {
      id: this.idCountHolder,
      title: this.bookForm.get('title')?.value,
      author: this.bookForm.get('author')?.value,
      picture: this.bookForm.get('picture')?.value,
      synopsis: this.bookForm.get('synopsis')?.value,
      year: this.bookForm.get('year')?.value
    }
    this.idCountHolder++;
    this.store.dispatch(addBook(book));
  }

}
