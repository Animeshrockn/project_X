import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdAHeaderComponent } from '../prod-a-header/prod-a-header.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-prod-a-reservation',
  imports: [ProdAHeaderComponent, FormsModule],
  templateUrl: './prod-a-reservation.component.html',
  styleUrls: ['./prod-a-reservation.component.css']
})
export class ProdAReservationComponent {
  reservation = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1
  };

  constructor(private http: HttpClient) {}

  // This function handles form submission
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Reservation Submitted:', this.reservation);

    // Call the API to save the reservation data
    this.http.post('http://localhost:5000/api/reservation', this.reservation)
      .subscribe(
        (response) => {
          console.log('Reservation response:', response);
          alert('Reservation submitted! Thank you.');
        },
        (error) => {
          console.error('Error submitting reservation:', error);
          alert('There was an error with your reservation. Please try again.');
        }
      );

    // Reset the form fields after submission
    this.resetForm();
  }

  // Function to reset the form fields
  resetForm() {
    this.reservation = { name: '', email: '', phone: '', date: '', time: '', guests: 1 };
  }
}
