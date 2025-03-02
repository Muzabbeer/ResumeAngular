import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'Work-card',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
  
  
})
export class WorkComponent  implements OnInit, OnDestroy {

  about={

    desc: 'Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis, tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel eleifend primis lectus quisque cubilia sed mauris. Lacinia porta vestibulum diam integer quisque eros pulvinar curae, curabitur feugiat arcu vivamus parturient aliquet laoreet at, eu etiam pretium molestie ultricies sollicitudin dui.',
    
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    // Check if the platform is the browser (client-side)
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS when the component is loaded (only in browser)
      AOS.init({
        duration: 1000,  // Duration of animation (in ms)
        easing: 'ease-out',  // Easing function for smoothness
        once: false,  // Trigger animation every time the element is in view
        offset: 100,  // Offset to start animation earlier or later
        debounceDelay: 50  // Delay between each animation trigger when scrolling
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