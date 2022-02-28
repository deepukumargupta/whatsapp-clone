import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from 'firebase';
import {auth} from 'firebase/app';
import {Router} from '@angular/router';
import UserCredential = firebase.auth.UserCredential;
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  
  // 1. Authentication
  // 2. Storing the route param value, room/:id -> id value

  private pathParamState = new BehaviorSubject<string>('');
  pathParam: Observable<string>;

  // Angular Fire User
  private user: User | undefined;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router
              ) {
    this.pathParam = this.pathParamState.asObservable();

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigateByUrl('').then();
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  loginWithGoogle(): void {
    this.afAuth['signInWithPopup'](new auth.GoogleAuthProvider()).then((data: UserCredential) => {
      if (data.user) {
        this.user = data.user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigateByUrl('').then();
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  logout(): void {
    this.afAuth['signOut']().then(() => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login').then();
    });
  }

  updatePathParamState(newPathParam: string): void {
    this.pathParamState.next(newPathParam);
  }

  getUser(): User {
    return this.user;
  }

}

export interface RoomData {
  name: string;
  id?: string;
}