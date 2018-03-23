import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'firedb-postdemo',
  templateUrl: './firedb.component.html',
  styleUrls: ['./firedb.component.scss']
})
export class FiredbComponent implements OnInit {
  constructor(private afs: AngularFirestore) { }
  postsCol: AngularFirestoreCollection<Post>;
  posts: any;
  title:string;
  content:string;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  showDelete:string;

  ngOnInit() {
    // This version returns all posts in the firestore
    this.postsCol = this.afs.collection('posts');
    /* This version retrieves posts by the passed in query. use this for searches
    this.postsCol = this.afs.collection('posts', ref => ref.where('title', '==', 'coursetro'));*/
    this.posts = this.postsCol.valueChanges();

    this.posts = this.postsCol.snapshotChanges()
    .map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data };
      });
    });
  }

  // This version lets firestore generate a unique id by itself
  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content});
  }

  /* This version provides the id for firestore
  addPost() {
    this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content});
  }
  */

  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }

}
