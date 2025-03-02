import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference',
  standalone: true,  // ensure standalone component support if needed
  imports: [CommonModule],
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  interval: any;
  isLoading = true;  // Add a loading flag

  testimonials = [
    {
      name: 'Aiyana',
      role: 'CEO / WEBM',
      image: 'assets/images/images1.jpg',
      text: 'Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.'
    },
    {
      name: 'Braiden',
      role: 'CEO / Creativem',
      image: 'assets/images/images2.jpg',
      text: 'sollicitudin ante pulvinar aHabitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend.'
    },
    {
      name: 'Alexander',
      role: 'CEO / Webnote',
      image: 'assets/images/images3.jpg',
      text: 'Commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad..Habitasse venenatis commodo tempor eleifend arcu sociis sollicitudin ante pulvinar ad, est porta cras erat ullamcorper volutpat metus duis platea convallis, tortor primis ac quisque etiam luctus nisl nullam fames. Ligula purus suscipit tempus nascetur curabitur donec nam ullamcorper, laoreet nullam mauris dui aptent facilisis neque elementum ac, risus semper felis parturient fringilla rhoncus eleifend..'
    }
  ];

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    console.log('Component Initialized');
    this.isLoading = false;  // Stop loading once the component is initialized
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    console.log('Auto slide started');
    
    // Ensure any existing interval is cleared before starting a new one
    if (this.interval) {
      clearInterval(this.interval);
    }

    // Using NgZone to ensure the interval works inside Angular's change detection
    this.ngZone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        console.log('Auto slide next');
        this.ngZone.run(() => { // Ensure changes are detected by Angular
          this.goToNext();
        });
      }, 2000); // Change slide every 1 second
    });
  }

  getTotalItems(): number {
    return this.testimonials.length;
  }

  goToNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  goToPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  ngOnDestroy(): void {
    console.log('Component destroyed. Clearing interval');
    // Clear the interval when the component is destroyed
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
