import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  imports: [CommonModule],  // Add CommonModule here
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    { icon: '⚽', title: 'Football Turf Installation', desc: 'FIFA-quality artificial turf installation for stadiums and clubs.' },
    { icon: '🏏', title: 'Cricket Ground Construction', desc: 'Synthetic cricket grounds with professional drainage.' },
    { icon: '🏀', title: 'Multi-Sport Courts', desc: 'Versatile turf surfaces for schools and community centers.' },
    { icon: '🌱', title: 'Landscape Artificial Grass', desc: 'Low-maintenance grass for residential and commercial landscaping.' },
    { icon: '🎾', title: 'Tennis Court Surfaces', desc: 'High-performance synthetic surfaces for tennis courts.' },
    { icon: '🔧', title: 'Maintenance & Repairs', desc: 'Year-round maintenance services for turf longevity.' }
  ];
}
