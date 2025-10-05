import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MediaItem} from '../models/media-item';
import {List} from "../../../core/data_structures/lists/list";
import {UrlUtilService} from '../../../shared/utils/url/url-util-service';
import {Carousel} from 'primeng/carousel';
import {PrimeTemplate} from 'primeng/api';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  imports: [
    Carousel,
    PrimeTemplate
  ]
})

export class Gallery {
  @Input() mediaItems: List<MediaItem> = new List([]);
  @Output() mediaAdded = new EventEmitter<File>();
  @Output() mediaDeleted = new EventEmitter<File>();
  protected readonly UrlUtilService = UrlUtilService;

  showCarousel = false;
  activeSlideIndex = 0;

  openCarousel(index: number) {
    this.activeSlideIndex = index;
    this.showCarousel = true;
  }

  closeCarousel() {
    this.showCarousel = false;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.mediaAdded.emit(file);
    input.value = '';
  }
}
