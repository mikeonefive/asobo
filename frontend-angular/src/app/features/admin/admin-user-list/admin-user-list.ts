import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { User } from '../../auth/models/user';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-user-list',
  imports: [
    TableModule,
    TagModule,
    DatePipe
  ],
  templateUrl: './admin-user-list.html',
  styleUrl: './admin-user-list.scss',
})
export class AdminUserList {
  users: User[] = [];
}
