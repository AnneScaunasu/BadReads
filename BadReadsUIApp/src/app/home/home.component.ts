import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BadreadsServiceService } from '../badreads-service.service';
import { AppBookshelfPopupComponent } from './app-bookshelf-popup/app-bookshelf-popup.component';
import { BookPopupComponent } from './app-book-popup/app-book-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BadreadsServiceService],
  standalone: true,
  imports: [AppBookshelfPopupComponent, BookPopupComponent]
})
export class HomeComponent {

  books: Book[] = [];

  constructor(private badReadsServie: BadreadsServiceService) {}

  ngOnInit() {
    this.badReadsServie.getBookList().subscribe(
      (data: Book[]) => {
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books', error);
      }
    );
  }

  openBookPopup(book: any) {
    // Logic to open book details popup
  }

  openBookshelfPopup(book: any) {
    // Logic to open bookshelf popup
  }
}
