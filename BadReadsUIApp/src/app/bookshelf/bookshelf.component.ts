import { Component } from '@angular/core';
import { BadreadsServiceService } from '../badreads-service.service';
import { Bookself } from '../models/bookself';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent {

  bookShelves: Bookself[] = [];

  constructor(private badReadsService: BadreadsServiceService) {}

  ngOnInit() {
    this.badReadsService.getShelfsListForUser(1).subscribe(
      (data: Bookself[]) => {
        this.bookShelves = data;
      },
      (error) => {
        console.error('Error fetching bookShelves', error);
      }
    )
  }

  createNewBookshelf() {
    // Logic to create a new bookshelf
  }

  viewBooks(shelf: any) {
    // Logic to view books in the selected bookshelf
  }
}
