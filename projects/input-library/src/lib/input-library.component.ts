import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-input-library',
  standalone: true,
  imports: [],
  template: ` <p>Testing input component library</p> `,
  styles: ``,
})
export class InputLibraryComponent implements OnInit {
  ngOnInit(): void {
    alert('Component Library');
  }
}
