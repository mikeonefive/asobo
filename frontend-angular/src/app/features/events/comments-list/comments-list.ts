import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Comment} from '../models/comment';
import {DatePipe} from '@angular/common';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-comments-list',
  imports: [
    FormsModule,
    DatePipe,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './comments-list.html',
  styleUrl: './comments-list.scss'
})
export class CommentsList {
  @Input() comments!: Comment[];
  @Output() commentDeleted = new EventEmitter<Comment>();
  @Output() commentEdited = new EventEmitter<Comment>();
}
