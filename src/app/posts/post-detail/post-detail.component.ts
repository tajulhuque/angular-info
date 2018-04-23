import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Post} from '../../model/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post;
  @Output() doDeletePost = new EventEmitter<Post>();
  answerHidden: boolean;

  constructor() {
    this.answerHidden = true;
  }

  ngOnInit() {
  }

  toggle() {
    this.answerHidden = !this.answerHidden;
  }

  deletePost() {
    // console.log('emitting doDeletePost for', this.post.question);
    this.doDeletePost.emit(this.post);
  }

}
