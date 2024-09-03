import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-popup',
  templateUrl: './app-book-popup.component.html',
  styleUrls: ['./app-book-popup.component.css'],
  standalone: true
})
export class BookPopupComponent {
  @Input() book: any;
  comments = [
    { text: 'Great book!' },
    // Add more comments
  ];
}
