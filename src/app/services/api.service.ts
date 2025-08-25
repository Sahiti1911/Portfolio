import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import certificateData from './certificate.json';
import skillsData from './skills.json';

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
}

export interface Skill {
  skill: string;
  rating: string;
  tools: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private githubUrl = 'https://api.github.com/users/Sahiti1911/repos';
  private http = inject(HttpClient);

  getGithubRepos(): Observable<any[]> {
    return this.http.get<any[]>(this.githubUrl);
  }

  getCertifications(): Observable<Certification[]> {
    return of(certificateData);
  }

  getSkills(): Observable<Skill[]> {
    return of(skillsData);
  }
}
