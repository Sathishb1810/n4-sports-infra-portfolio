import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Project {
  title: string;
  category: string;
  description: string;
  location: string;
  year: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  imports: [CommonModule],  // Add CommonModule here
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects: Project[] = [
    { title: 'Metropolitan Football Stadium', category: 'Sports Fields', description: 'Football turf installation for 5,000-capacity stadium.', location: 'Chennai, India', year: '2024' },
    { title: 'Elite Cricket Academy', category: 'Sports Fields', description: 'Custom synthetic cricket ground.', location: 'Mumbai, India', year: '2023' },
    { title: 'International School Complex', category: 'Sports Fields', description: 'Multi-sport turf covering football, hockey & athletics.', location: 'Bangalore, India', year: '2023' },
    { title: 'Luxury Resort Landscaping', category: 'Landscapes', description: 'Artificial grass installation for resort grounds.', location: 'Goa, India', year: '2024' },
    { title: 'Corporate Office Gardens', category: 'Commercial', description: 'Artificial grass for tech campus outdoor spaces.', location: 'Hyderabad, India', year: '2023' },
    { title: 'Community Tennis Courts', category: 'Sports Fields', description: 'Dual tennis court installation with synthetic surface.', location: 'Pune, India', year: '2024' }
  ];

  categories = ['All', 'Sports Fields', 'Landscapes', 'Commercial'];
  selectedCategory = 'All';

  get filteredProjects() {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
