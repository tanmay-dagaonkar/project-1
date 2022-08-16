import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { throwError as observableThrowError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }
  public login(email: string, password: string): Promise<any>{
    return signInWithEmailAndPassword(this.auth, email, password)
      .catch((error) => {
      console.log(error.message);})
  }
  public registration(email: string, password: string): Promise<any>{
    return createUserWithEmailAndPassword(this.auth, email, password).catch((error) => {
      throwError(() => new Error('test'))})
  }
}
