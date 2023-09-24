import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MyPostsComponent } from './posts/pages/my-posts/my-posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './posts/pages/create-post/create-post.component';
import { AllPostsComponent } from './posts/pages/all-posts/all-posts.component';


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
