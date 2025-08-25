import { CommonModule } from '@angular/common';
import { Component, inject, NgZone } from '@angular/core';
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
  successMessage = '';
  errorMessage = '';

  private fb = inject(FormBuilder);
  private ngZone = inject(NgZone);

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

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
            console.log('EmailJS success callback triggered'); // check success
            this.ngZone.run(() => {
              this.successMessage = 'Message sent successfully!';
              this.errorMessage = '';
              this.contactForm.reset();
              console.log(this.successMessage); // confirm message set

              setTimeout(() => {
                this.successMessage = '';
                console.log('Success message cleared'); // confirm auto-hide
              }, 3000);
            });
          },
          (error) => {
            console.log('EmailJS error callback triggered:', error); // check error
            this.ngZone.run(() => {
              this.errorMessage = 'Failed to send message. Try again later.';
              this.successMessage = '';

              setTimeout(() => {
                this.errorMessage = '';
              }, 3000);
            });
          },
        );
    } else {
      this.errorMessage = 'Please correct the errors below.';
      this.successMessage = '';
      this.contactForm.markAllAsTouched();
    }
  }
}
