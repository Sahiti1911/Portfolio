import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService, Skill } from '../../services/api.service';
import { FlipCardComponent } from '../flip-card/flip-card.component';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, FlipCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  private api = inject(ApiService);

  getIconClass(skill: string): string {
    switch (skill.toLowerCase()) {
      case 'html':
        return 'devicon-html5-plain colored';
      case 'c++':
        return 'devicon-cplusplus-plain colored';
      case 'python':
        return 'devicon-python-plain colored';
      case 'typescript':
        return 'devicon-typescript-plain colored';
      case 'javascript':
        return 'devicon-javascript-plain colored';
      case 'php':
        return 'devicon-php-plain colored';
      case 'jupyter notebook':
        return 'devicon-jupyter-plain colored';
      default:
        return '';
    }
  }

  ngOnInit(): void {
    this.api.getSkills().subscribe((data: Skill[]) => {
      this.skills = data;
    });
  }
}
