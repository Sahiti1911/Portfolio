import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    return this.http.get<Certification[]>('assets/certificate.json');
  }

  // getSkills(): Observable<string[]> {
  //   return this.http.get<any[]>(this.githubUrl).pipe(
  //     map((repos) => {
  //       const languages = repos
  //         .map((repo) => repo.language)
  //         .filter((lang) => !!lang);

  //       return Array.from(new Set(languages));
  //     }),
  //   );
  // }
  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('assets/skills.json');
  }
}
