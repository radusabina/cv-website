import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    CommonModule,
    AboutComponent,
    EducationComponent,
    ProjectsComponent,
    ProjectsComponent,
    SkillsComponent,
    NgbModule,
  ],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  selectedSection: string = 'about';

  showSection(section: string) {
    this.selectedSection = section;
  }
}
