import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'angular-demo';
  anyName = '';
  description = '';
  submitted?: { name: string; description: string };

  /**
   * Returns the position of the first occurrence of `pattern` in `text`
   */
  indexOf(text: string, pattern: string): number {
    return text.indexOf(pattern);
  }

  onSubmit() {
    this.submitted = { name: this.anyName, description: this.description };
  }
}
