import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  services = [
    {
      title: 'Engine Diagnostics',
      description:
        'Advanced diagnostics and precision engine repair using modern automotive systems.',
    },
    {
      title: 'Car Detailing',
      description:
        'Luxury interior and exterior detailing to restore showroom-quality appearance.',
    },
    {
      title: 'Performance Tuning',
      description:
        'Turbo upgrades, ECU tuning, suspension tuning, and custom modifications.',
    },
  ];

  galleryImages = [
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format&fit=crop',
  ];

  stats = [
    { value: '12+', label: 'Years Experience' },
    { value: '8K+', label: 'Vehicles Serviced' },
    { value: '99%', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

}
