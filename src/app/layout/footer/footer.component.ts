import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private router = inject(Router);

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
