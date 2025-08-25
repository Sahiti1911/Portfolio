import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService, Certification } from '../../services/api.service';

@Component({
  selector: 'sahiti-certifications',
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css',
})
export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [];
  private certService = inject(ApiService);

  ngOnInit(): void {
    this.certService.getCertifications().subscribe({
      next: (data) => (this.certifications = data),
      error: (err) => console.error('Failed to load certifications', err),
    });
  }
}
