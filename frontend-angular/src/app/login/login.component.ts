// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary forms modules

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup; // Declare a FormGroup for the login form

  constructor(private fb: FormBuilder) {
    // Initialize the form in the constructor
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Add more validators as needed
      password: ['', Validators.required]
    });
  }

  // Function to handle form submission
  onSubmit() {
    // Check if the form is valid
    if (this.loginForm.valid) {
      // Call an authentication service to handle login logic
      // For now, we'll log the form values to the console
      console.log('Login form submitted:', this.loginForm.value);
    } else {
      // Form is invalid, show validation errors
      alert('Please fill in all required fields.');
    }
  }
}
