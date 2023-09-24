import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MyPostsComponent } from './posts/my-posts/my-posts.component';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    CreatePostComponent,
    MyPostsComponent,
    AllPostsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
