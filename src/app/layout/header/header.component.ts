import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent {
  menuOpen = false;
  // window: any;

  isMobile = window.innerWidth <= 768;

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  private router = inject(Router);

  scrollToSection(sectionId: string): void {
    // Close mobile menu if open
    if (this.menuOpen) {
      this.closeMenu();
    }
    // Navigate with fragment - router will automatically scroll to the element
    this.router.navigate([], { fragment: sectionId });
  }
}
