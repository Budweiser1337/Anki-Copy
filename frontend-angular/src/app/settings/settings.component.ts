// settings.component.ts
import {Component, Inject, Renderer2, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  encapsulation: ViewEncapsulation.None // Add this line
})
export class SettingsComponent {
  settingsForm: FormGroup;

  // Example: Dummy data for settings options
  appearanceSettings = [
    { label: 'Theme', controlName: 'theme', options: ['default', 'dark'] },
    { label: 'Font Size', controlName: 'fontSize', options: ['small', 'medium', 'large'] },
    // Add more appearance options as needed
  ];

  constructor(
    private fb: FormBuilder,
  private renderer: Renderer2,
  @Inject(DOCUMENT) private document: Document) {
    this.settingsForm = this.fb.group({});
    this.initializeFormControls(this.appearanceSettings);

  }

  private initializeFormControls(settingsOptions: any[]): void {
    settingsOptions.forEach(option => {
      this.settingsForm.addControl(option.controlName, this.fb.control(option.options[0])); // Set the default value
    });
  }

  // Function to handle form submission
  onSubmit() {
    if (this.settingsForm.valid) {
      // Apply theme and font size changes here
      this.applyTheme(this.settingsForm.value.theme);
      this.applyFontSize(this.settingsForm.value.fontSize);

      console.log('Settings form submitted:', this.settingsForm.value);
    } else {
      alert('Please fill in all required fields.');
    }
  }

  // Function to apply theme changes
  private applyTheme(theme: string): void {
    // Assuming you have CSS classes for different themes (e.g., 'theme-default', 'theme-dark')
    const body = this.document.body;

    // Remove existing theme classes
    body.classList.remove('theme-default', 'theme-dark');

    // Add the selected theme class
    body.classList.add(`theme-${theme}`);
  }

  // Function to apply font size changes
  private applyFontSize(fontSize: string): void {
    // Assuming you have CSS classes for different font sizes (e.g., 'font-small', 'font-medium')
    const body = this.document.body;

    // Remove existing font size classes
    body.classList.remove('font-small', 'font-medium', 'font-large');

    // Add the selected font size class
    body.classList.add(`font-${fontSize}`);
  }
}
