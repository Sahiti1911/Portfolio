import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      emailjs
        .send(
          'service_d983fjs',
          'template_a99nnta',
          this.contactForm.value,
          'gpLGRv7PX_GgDUBH3',
        )
        .then(
          () => {
            this.successMessage = 'Message sent successfully!';
            this.errorMessage = '';
            this.contactForm.reset();
          },
          () => {
            this.errorMessage = 'Failed to send message. Try again later.';
            this.successMessage = '';
          },
        );
    } else {
      this.errorMessage = 'Please correct the errors below.';
      this.successMessage = '';
      this.contactForm.markAllAsTouched();
    }
  }
}
