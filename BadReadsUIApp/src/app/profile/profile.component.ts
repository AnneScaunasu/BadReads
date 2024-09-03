import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    username: 'JohnDoe',
    userType: 'Normal'
  };

  logout() {
    // Logic for logout
  }
}
