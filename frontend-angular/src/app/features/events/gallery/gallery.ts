import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MediaItem} from '../models/media-item';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  @Input() mediaItems!: MediaItem[];
  @Output() mediaAdded = new EventEmitter<File>();
  @Output() mediaDeleted = new EventEmitter<File>();

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    this.mediaAdded.emit(file);
    input.value = '';
  }
}
