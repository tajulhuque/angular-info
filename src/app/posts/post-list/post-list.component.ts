import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post.model';
import { PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {

  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(postData => {
        console.log('post-list received', postData);
        this.posts = postData;
      });
  }

  addPost(post: Post) {
    this.postService.addPost(post).subscribe(newPost => {
        this.posts.unshift(newPost);
      });
  }

  deletePost(post: Post) {
    this.postService.deletePost(post)
      .subscribe(deletedId => {
        this.posts = this.posts.filter(p => p._id !== deletedId);
      });
  }
}
