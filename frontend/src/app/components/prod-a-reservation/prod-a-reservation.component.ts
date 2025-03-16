import { Component } from '@angular/core';
import { ProdAHeaderComponent } from '../prod-a-header/prod-a-header.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-prod-a-reservation',
  imports: [ProdAHeaderComponent, FormsModule],
  templateUrl: './prod-a-reservation.component.html',
  styleUrl: './prod-a-reservation.component.css'
})

export class ProdAReservationComponent {
  reservation = {
    name: '',
    phone: '',
    date: '',
    time: ''
  };

  // This function handles form submission
  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Reservation Submitted:', this.reservation);
    // Here you can integrate logic to send the reservation data to a backend (e.g., via an API call)
    alert('Reservation submitted! Thank you.');
    
    // Reset the form fields after submission
    this.resetForm();
  }

  // Function to reset the form fields
  resetForm() {
    this.reservation = { name: '', phone: '', date: '', time: '' };
  }
}