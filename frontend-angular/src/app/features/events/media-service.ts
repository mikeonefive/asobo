import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {MediaItem} from './models/media-item';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private baseUrl = environment.eventsAddress;

  constructor(private http: HttpClient) {}

  getAllByEventId(eventId: string) {
    return this.http.get<MediaItem[]>(`${this.baseUrl}/${eventId}/media`);
  }

  upload(eventId: string, file: File) {
    const form = new FormData();
    form.append('mediumFile', file);
    return this.http.post<MediaItem>(`${this.baseUrl}/${eventId}/media`, form);
  }

  delete(eventId: string, file: File) {
    console.log('deleting file');
  }
}
