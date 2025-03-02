import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    {id:0, name: 'HTML', level: '90%' },
    {id:1, name: 'CSS', level: '80%' },
    {id:2, name: 'JavaScript', level: '85%' },
    {id:3, name: 'Angular', level: '75%' },
    {id:4, name: 'Node.js', level: '70%' }
  ];
}