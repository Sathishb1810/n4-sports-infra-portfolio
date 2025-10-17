import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  imports: [CommonModule],  // Add CommonModule here
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    { name: 'Raj Patel', company: 'City Football Club', text: 'N4 Sports Infra delivered an exceptional football field that exceeded our expectations...', rating: 5 },
    { name: 'Dr. Meera Sharma', company: 'Elite Sports Academy', text: 'Their cricket ground construction was completed on time with superior craftsmanship...', rating: 5 },
    { name: 'Vikram Singh', company: 'Green Valley Resort', text: 'The artificial grass installation transformed our landscape. It looks natural...', rating: 5 },
    { name: 'Anita Reddy', company: 'International School', text: 'Professional service from start to finish. The multi-sport field has been perfect...', rating: 5 }
  ];

  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 6000);
  }
}
