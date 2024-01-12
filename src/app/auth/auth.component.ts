import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component(
  {
    selector: 'app-auth',
    templateUrl: 'auth.component.html'
  })
export class AuthComponent {
  isLogin = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router:Router) {
  }

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObservable: Observable<AuthResponseData>;
    this.isLoading = true;

    if (this.isLogin) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signup(email, password);
    }

    authObservable.subscribe({
      next:
        (resData) => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['./recipes']);
        }
      , error:
        (errorMessage) => {
          this.error = errorMessage;
          this.isLoading = false;
          console.log(this.error);
        }
    });
    form.resetForm();
  }
}
