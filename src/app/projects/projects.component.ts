import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  isParagraphVisible1: boolean = false;
  isParagraphVisible2: boolean = false;
  isParagraphVisible3: boolean = false;

  toggleParagraph1(): void {
    this.isParagraphVisible1 = !this.isParagraphVisible1;
  }
  toggleParagraph2(): void {
    this.isParagraphVisible2 = !this.isParagraphVisible2;
  }
  toggleParagraph3(): void {
    this.isParagraphVisible3 = !this.isParagraphVisible3;
  }
}
