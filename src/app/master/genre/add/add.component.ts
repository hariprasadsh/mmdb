import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  genreForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.genreForm = this.fb.group({
      name: ['', Validators.required],
      tag: ['', Validators.required],
      desc: [''],
    });
  }

  save() {
    console.log('genre data', this.genreForm.value);
  }
}
