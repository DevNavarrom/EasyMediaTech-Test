import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postForm = this.fb.group(
      {
        title: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(30)]],
        message: ['', [Validators.required, Validators.minLength(100), Validators.maxLength(300)]],
        created: [new Date().toString()]
      }
    )
  }

  onSubmit(form: FormGroup): void {
    console.log(form.value);
    
  }

}
