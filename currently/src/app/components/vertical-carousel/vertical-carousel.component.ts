import { Component, OnInit, ElementRef } from '@angular/core';
import { Reel } from '../../model/Reel';
import { LoadReelService } from '../../services/load-reel.service';
import { CommonModule } from '@angular/common';
import Hammer from 'hammerjs';


@Component({
  selector: 'app-vertical-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-carousel.component.html',
  styleUrl: './vertical-carousel.component.css'
})

export class VerticalCarouselComponent implements OnInit {
  activeIndex = 0;
  reels: Reel[] = [];

  constructor(private reelService: LoadReelService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.loadReels();
    this.initializeHammer();
  }

  private initializeHammer(): void {
    const hammer = new Hammer(this.elementRef.nativeElement);

    hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    hammer.get('doubletap').set({ posThreshold: 20, interval: 300 });
    
    hammer.on('swipedown', () => this.swipeDown());
    hammer.on('swipeup', () => this.swipeUp());
    hammer.on('doubletap', () => this.incrementLikes());
  }

  private incrementLikes(): void {
    if (this.activeIndex >= 0 && !this.reels[this,this.activeIndex].userLiked) {
      // alert(`user liked ${this.activeIndex}`);
      this.reels[this.activeIndex].likes++;
      this.reels[this.activeIndex].userLiked = true;
    } else if (this.activeIndex >= 0 && this.reels[this,this.activeIndex].userLiked) {
      // alert(`user unliked ${this.activeIndex}`);
      this.reels[this.activeIndex].likes--;
      this.reels[this.activeIndex].userLiked = false;
    }
  }

  swipeDown(): void {
    
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    // alert(`swiped down to ${this.activeIndex}`);
  }
  
  swipeUp(): void {
    
    if (this.activeIndex < this.reels.length - 1) {
      this.activeIndex++;
    }
    // alert(`swiped up to ${this.activeIndex}`);
  }

  
  loadReels(): void {
    this.reelService.getReels().subscribe(reels => {
      this.reels = reels;
      console.log(this.reels);
      this.reels.forEach((reel): void => {
        reel.description = reel.description.slice(0, 60);
        reel.description += '...'
        reel.likes = Math.floor(Math.random() * 14000);
      });
    });
    
  }
}
