import {Component, ViewEncapsulation, inject, signal} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../auth-service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {SelectModule} from 'primeng/select';
import {FormUtilService} from '../../../../shared/utils/form/form-util-service';

@Component({
  selector: 'app-register-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    SelectModule,
  ],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
  encapsulation: ViewEncapsulation.None,
})
export class RegisterForm {
  registerForm: FormGroup;
  salutations: string[];
  showCustomSalutation: boolean;

  private formBuilder = inject(FormBuilder);
  public authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  previewUrl = signal<string | ArrayBuffer | null>(null);
  selectedImage: File | null = null;

  constructor() {
    this.salutations = ['Mr.', 'Ms.', 'Other'];
    this.showCustomSalutation = false;

    this.registerForm = this.formBuilder.group({
      salutation: ['',
        Validators.required
      ],
      customSalutation: [''],
      firstName: ['', [
        Validators.required,
      ]],
      surname: ['', [
        Validators.required,
      ]],
      username: ['', [
        Validators.required,
      ]],
      email: ['', [
        Validators.required,
        FormUtilService.strictEmailValidator,
      ]],
      location: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
      ]],
      passwordConfirmation: ['', [
        Validators.required,
      ]],
    });

    this.registerForm.get('salutation')?.valueChanges.subscribe(value => {
      this.showCustomSalutation = value === this.salutations[this.salutations.length-1];
      const customSalutationControl = this.registerForm.get('customSalutation');

      if (this.showCustomSalutation) {
        customSalutationControl?.setValidators([Validators.required]);
      } else {
        customSalutationControl?.clearValidators();
        customSalutationControl?.setValue('');
      }

      customSalutationControl?.updateValueAndValidity();
    });
  }

  onProfileBoxClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.id !== 'profile-pic-input') {
      const input = document.getElementById('profile-pic-input') as HTMLInputElement;
      input.click();
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) {
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('Please select an image.');
      return;
    }

    this.selectedImage = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl.set(reader.result);

      const box = document.getElementById('profile-picture-box') as HTMLElement;
      if (box) {
        box.style.border = 'none';
        box.style.backgroundColor = 'transparent';
      }
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const formDataObj = this.getSubmitData();
    if(!formDataObj) {
      return;
    }
    console.log('Form submitted:', formDataObj);

    const formData = new FormData();

    Object.entries(formDataObj).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    if (this.selectedImage) {
      formData.append('profilePicture', this.selectedImage);
    }

    this.authService.register(formData).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
        this.router.navigate([returnUrl]);
      },
      error: (err) => {
        console.error('Registration failed:', err);
      }
    });
  }

  private getSubmitData() {
    const formData = { ...this.registerForm.value };


    // Replace "Other" with custom salutation
    if (formData.salutation === 'Other') {
      if (!formData.customSalutation) {
        return;
      }
      formData.salutation = formData.customSalutation;
    }

    // Remove fields that shouldn't be sent to API
    delete formData.customSalutation;
    delete formData.passwordConfirmation;

    return formData;
  }

  get getFormControls() {
    return this.registerForm.controls;
  }
}
