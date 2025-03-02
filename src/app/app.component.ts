import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { HeaderComponent } from './header.component';
import { AboutComponent } from './about.component';
import { SkillsComponent } from './skills.component';
import { CommonModule } from '@angular/common'; 
import { PortfolioComponent } from './portfolio.component';
import { PortfolioPicComponent } from './portfoliopic.component';
import { WorkComponent } from './work.component';
import { EducationComponent } from './education.component';
import { ReferenceComponent } from './reference.component';
import { ContactComponent } from './contact.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css',
  imports: [NavbarComponent,HeaderComponent, AboutComponent,SkillsComponent, CommonModule, 
    PortfolioComponent,PortfolioPicComponent, WorkComponent, EducationComponent, ReferenceComponent, 
    ContactComponent, FooterComponent]
})
export class AppComponent {
  title = 'angular-resume';
}
