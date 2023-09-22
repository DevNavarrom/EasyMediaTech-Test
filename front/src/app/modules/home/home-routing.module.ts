import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { MyPostsComponent } from './posts/my-posts/my-posts.component';
import { AllPostsComponent } from './posts/all-posts/all-posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'create-post',
        component: CreatePostComponent
      },
      {
        path: 'my-posts',
        component: MyPostsComponent
      },
      {
        path: 'all-posts',
        component: AllPostsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
