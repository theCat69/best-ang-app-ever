import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap } from "rxjs";
import { fakeHttpGetBooks } from "src/app/fakeServer/fake-server";
import { Book, BookActions, loadBooks } from "..";

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.PRELOAD),
    switchMap((action: BookActions.PRELOAD) => of(loadBooks({ books: JSON.parse(fakeHttpGetBooks()) as Book[] })))
  ));

  constructor(
    private actions$: Actions,
  ) { }
}