import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  screenHeight: any;
  screenWidth: any;
  footerMaxHeight!: number;
  title = 'angularecommerce';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Only execute browser-specific code
    if (isPlatformBrowser(this.platformId)) {
      this.getScreenSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
      this.footerMaxHeight = this.screenHeight - 160;
    }
  }
}
