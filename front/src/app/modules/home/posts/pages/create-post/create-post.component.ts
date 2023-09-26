import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeNotification } from 'src/app/utils/types';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;

  isModalOpen: boolean = false;
  msgNotification: string = "Post Create";
  typeNotify: TypeNotification = 'success';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postForm = this.fb.group(
      {
        title: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(30)]],
        body: ['', [Validators.required, Validators.minLength(100), Validators.maxLength(300)]],
        created: [new Date().toString()]
      }
    )
  }

  handleOpenModal(value: boolean): void {
    this.isModalOpen = value;
    console.log(this.isModalOpen);
  }

  onSubmit(form: FormGroup): void {
    console.log(form.value);
    this.handleOpenModal(true);
  }

}
