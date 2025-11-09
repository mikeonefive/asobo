import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {DatePickerModule} from 'primeng/datepicker';

@Component({
  selector: 'app-create-event-form',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DatePickerModule
  ],
  templateUrl: './create-event-form.html',
  styleUrl: './create-event-form.scss',
})
export class CreateEventForm {
  createEventForm: FormGroup;
  private formBuilder = inject(FormBuilder);

  constructor() {
    this.createEventForm = this.formBuilder.group({
      title: ['', Validators.required, Validators.minLength(3), Validators.maxLength(100)],
      description: ['', [Validators.required], Validators.minLength(10), Validators.maxLength(1000)],
      location: ['', [Validators.required]],
      date: [new Date(), [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.createEventForm.getRawValue());
  }
}
