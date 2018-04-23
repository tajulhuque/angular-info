import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostDetailComponent } from '../../posts/post-detail/post-detail.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor() {
    this.posts = [
      new Post(
        'How would you display a property of a component class (say, description) in its html template?',
        'Put the property in curly braces: {{description}}'
      ),
      new Post(
        'What does a decorator like @Component do?',
        'Adds functionality to whatever it is decorating (in this case, a class) without requiring any code change to that thing'
      ),
      new Post(
        'What file determines the modules needed for an app?',
        'package.json'
      )
    ];
  }

  ngOnInit() {
  }

  addPost(post: Post) {
    // console.log('addPost', post);
    this.posts.unshift(post);
  }

  deletePost(post: Post) {
    const indexToDelete = this.posts.indexOf(post);
    if (indexToDelete !== -1) {
      this.posts.splice(indexToDelete, 1);
    }
  }
}
