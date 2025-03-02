import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({

  selector: 'app-portfolio-pic',
  imports: [CommonModule],
  template: `
  <div class="portfolio">
      <div class="container text-center">
        <div class="btn-group my-3">
          <button class="btn btn-primary" (click)="updateImages('design')">🎨 Design</button>
          <button class="btn btn-success" (click)="updateImages('development')">💻 Development</button>
          <button class="btn btn-warning" (click)="updateImages('photography')">📷 Photography</button>
        </div>
        <div class="row justify-content-center">
          <!-- Iterate through images and display two in each row -->
          <div class="col-md-6 col-sm-12 mb-3" *ngFor="let image of images; let i = index">
            <div class="image-container">
              <img class="img-fluid rounded shadow" [src]="image" alt="Portfolio item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
 .portfolio { text-align: center; }
    .btn-group button { margin: 5px; padding: 10px; cursor: pointer; }
    .row { margin-top: 20px; }
    .col-md-6 { display: flex; justify-content: center; align-items: center; }
    .image-container { width: 100%; height: 300px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
    .image-container img { width: 100%; height: 100%; object-fit: cover; }
  `]
})
export class PortfolioPicComponent {

  images: string[] = ['assets/images/images1.jpg', 'assets/images/images2.jpg', 'assets/images/images3.jpg', 'assets/images/images4.jpg'];
  
  imageSets: Record<string, string[]> = {
    design: ['assets/images/images5.jpg', 'assets/images/images6.jpg', 'assets/images/images7.jpg', 'assets/images/images.jpg'],
    development: ['assets/images/images8.jpg', 'assets/images/images4.jpg', 'assets/images/images3.jpg', 'assets/images/images1.jpg'],
    photography: ['assets/images/images2.jpg', 'assets/images/images1.jpg', 'assets/images/images.jpg', 'assets/images/images8.jpg']
  };
  
  updateImages(category: string) {
    this.images = this.imageSets[category] || [];
  }
 
}
