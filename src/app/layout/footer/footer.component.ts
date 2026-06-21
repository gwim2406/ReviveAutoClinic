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
    // Navigate with fragment - router will automatically scroll to the element
    this.router.navigate([], { fragment: sectionId });
  }
}
