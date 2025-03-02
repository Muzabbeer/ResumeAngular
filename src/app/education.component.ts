import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'education-card',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
  
  
})
export class EducationComponent  implements OnInit, OnDestroy {

  about={

    desc: 'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.',
    
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    // Check if the platform is the browser (client-side)
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS when the component is loaded (only in browser)
      AOS.init({
        duration: 1000, 
        easing: 'ease-out',  
        once: false, 
        offset: 100, 
        debounceDelay: 50  
      });

      // Adding a scroll listener to refresh AOS on scroll
      window.addEventListener('scroll', this.onScroll);
    }
  }

  ngOnDestroy(): void {
    // Cleanup the scroll event listener and AOS refresh when component is destroyed
    if (isPlatformBrowser(this.platformId)) {
      if (window) {
        window.removeEventListener('scroll', this.onScroll);
      }
      if (AOS) {
        AOS.refresh();
      }
    }
  }

  // Handle scroll events and refresh AOS
  private onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }
  }

}