import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../layout/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private router = inject(Router);

  services = [
    {
      title: 'Vehicle Health & Diagnostics',
      description:
        `<ul><li>Vehicle Health Inspection.</li><li>Advanced Diagnostics.</li><li>ECU Scanning.</li><li>Preventive Maintenance.</li><li>Electrical Diagnostics.</li></ul>`,
    },
    {
      title: 'Mechanical Services',
      description:
        `<ul><li>Engine Repairs.</li><li>Suspension Repairs.</li><li>Steering Systems.</li><li>Brake Systems.</li><li>AC Systems.</li></ul>`,
    },
    {
      title: 'Body & Appearance Care',
      description:
        `<ul><li>Accident Repairs.</li><li>Tinkering & Panel Work.</li><li>Vehicle Painting.</li><li>Detailing.</li><li>Paint Restoration.</li></ul>`,
    },
  ];

  galleryImages = [
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200&auto=format&fit=crop',
  ];

  stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '2K+', label: 'Vehicles Serviced' },
    { value: '99%', label: 'Customer Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  scrollToSection(sectionId: string): void {
    // Navigate with fragment
    this.router.navigate([], { fragment: sectionId });
    
    // Scroll to element after a short delay to ensure navigation completes
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
