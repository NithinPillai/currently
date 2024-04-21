import { Component, OnInit } from '@angular/core';
import { Reel } from '../../model/Reel';
import { LoadReelService } from '../../services/load-reel.service';


@Component({
  selector: 'app-vertical-carousel',
  standalone: true,
  templateUrl: './vertical-carousel.component.html',
  styleUrl: './vertical-carousel.component.css'
})

export class VerticalCarouselComponent implements OnInit {
  activeIndex = 0;
  reels: Reel[] = [];

  constructor(private reelService: LoadReelService) {}

  ngOnInit(): void {
    this.loadReels();
  }

  loadReels(): void {
    this.reelService.getReels().subscribe(reels => {
      this.reels = reels;
      console.log(this.reels);
    });
    
  }
}
