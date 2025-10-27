import {Component, ElementRef, input, output, signal, viewChild} from '@angular/core';

@Component({
  selector: 'app-profile-picture-upload',
  templateUrl: './profile-picture-upload.html',
  imports: [
    //NgOptimizedImage
  ],
  styleUrl: './profile-picture-upload.scss'
})
export class ProfilePictureUpload {
  profilePictureBox = viewChild<ElementRef<HTMLElement>>('profilePictureBox');

  currentImage = input<string | ArrayBuffer | null>(null);
  showPlusBeforeUpload = input<boolean>(false);
  fileSelected = output<File>();
  preview = signal<string | null>(null);

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.preview.set(e.target.result);
      this.fileSelected.emit(file);

      const box = this.profilePictureBox()?.nativeElement;
      if (box && this.showPlusBeforeUpload()) {
        box.style.border = 'none';
        box.style.backgroundColor = 'transparent';
      }
    };
    reader.readAsDataURL(file);
  }
}
