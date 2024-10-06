import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  paragraphs: string[] = [
    'I am a dedicated and hardworking 22-year-old individual with a strong commitment to personal and professional growth. I have a passion for learning and am always eager to acquire new skills that enhance my capabilities.',
    'Creativity is one of my strong suits. I have a creative mindset that allows me to approach problems from different angles and devise innovative solutions. I enjoy brainstorming and collaborating with others, as I believe that teamwork often leads to the best outcomes.',
    'I thrive in challenging environments, where I can push my boundaries and grow. My goal is to be part of a team where I can learn from others, share my ideas, and contribute to meaningful projects that have a positive impact.',
  ];

  currentIndex: number = 0;

  get nextIndex() {
    return (this.currentIndex + 1) % this.paragraphs.length; // Next index in circular array
  }

  get previousIndex() {
    return (
      (this.currentIndex - 1 + this.paragraphs.length) % this.paragraphs.length
    ); // Previous index in circular array
  }

  nextParagraph() {
    this.currentIndex = this.nextIndex; // Move to the next paragraph
  }
}
