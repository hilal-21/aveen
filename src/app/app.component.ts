import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'a';
  /**
   * Handles form submission.
   * @param form - The NgForm object representing the form being submitted.
   */
onSubmit(form: NgForm) {
  if (form.valid) {
    console.log('Form Submitted!', form.value);
  } else {
    console.log('Form is invalid!');
  }
   if (this.hasCheckedCheckbox()) {
    console.log('Form submitted!');
  } else {
    console.log('Please select at least one checkbox before submitting.');
  }
}
//message of level
selectedLevel: string = '';
username="";
saveinformation:string="";
getMessageForSelectedLevel(): any {
  switch (this.selectedLevel) {
    case 'beginner':
      this.saveinformation = `Congratulations [${this.username}]! Your programming skills are impressive. Keep up the great work in level Beginner.`;
      break;

    case 'intermediate':
      this.saveinformation = `Congratulations [${this.username}]! Your programming skills are impressive. Keep up the great work in level Intermediate!`;
      break;

    case 'advanced':
      this.saveinformation = `Congratulations [${this.username}]! Your programming skills are impressive. Keep up the great work in level Advanced.`;
      break;

    default:
      this.saveinformation = '';
      break;
  }
}
checkboxes: any[] = [
  { label: 'c++', isChecked: false },
  { label: 'javascript', isChecked: false },
  { label: 'java', isChecked: false },
  { label: 'python', isChecked: false },
];
hasCheckedCheckbox(): boolean {
  return this.checkboxes.some(checkbox => checkbox.isChecked);
}

}
