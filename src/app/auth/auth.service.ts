import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Subject, throwError} from "rxjs";
import {User} from "./user.model";

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({providedIn: "root"})
export class AuthService {
  private signUpUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCi3-QpZSOwTJ7e-DmE3UpQIYEk_c4eSbo';
  private loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCi3-QpZSOwTJ7e-DmE3UpQIYEk_c4eSbo';

  user = new Subject<User>();

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      this.signUpUrl,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError), tap(responseData => {
    this.handleUser(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn)
    }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      this.loginUrl,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(this.handleError), tap(responseData => {
      this.handleUser(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn)
    }))
  }

  private handleUser(email: string, id:string, token:string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, id, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown Error occurred!'
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Incorrect Password';
    }
    return throwError(errorMessage);

  }
}
