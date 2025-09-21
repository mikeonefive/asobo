import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-comment',
  imports: [
    FormsModule
  ],
  templateUrl: './new-comment.html',
  styleUrl: './new-comment.scss'
})
export class NewComment {
  @Input() id!: string;
  @Input() userId!: string;
  @Input() text!: string;

  submit() {
    alert(JSON.stringify(this.text.trim()));
  }
}
