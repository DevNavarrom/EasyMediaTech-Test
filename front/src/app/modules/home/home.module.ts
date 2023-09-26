import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MyPostsComponent } from './posts/pages/my-posts/my-posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './posts/pages/create-post/create-post.component';
import { AllPostsComponent } from './posts/pages/all-posts/all-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './posts/components/search/search.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CreatePostComponent,
    MyPostsComponent,
    AllPostsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class HomeModule { }
