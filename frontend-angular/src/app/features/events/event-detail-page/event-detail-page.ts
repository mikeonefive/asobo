import {Component} from '@angular/core';
import {EventService} from '../event-service';
import {Event} from '../models/event';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';
import {NewComment} from "../new-comment/new-comment";

@Component({
  selector: 'app-event-detail-page',
    imports: [
        DatePipe,
        NewComment
    ],
  templateUrl: './event-detail-page.html',
  styleUrl: './event-detail-page.scss'
})
export class EventDetailPage {
  id!: string;
  title!: string;
  pictureURI!: string;
  date!: string;
  time!: string;
  location!: string;
  description?: string;

  constructor(private route: ActivatedRoute, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const eventId = params.get('id');
      if (eventId) {
        this.loadEvent(eventId);
      }
    });
  }

  loadEvent(eventId: string) {
      this.eventService.getEventById(eventId).subscribe({
        next: (event: Event) => {
          this.title = event.title;
          this.pictureURI = event.pictureURI;
          this.date = event.date;
          this.time = event.date;
          this.location = event.location;
          this.description = event.description;
        },
        error: (err) => console.error('Error fetching event:', err)
      });
  }
}
