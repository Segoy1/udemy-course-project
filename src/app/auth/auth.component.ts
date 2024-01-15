import {Component, ComponentFactoryResolver, OnDestroy, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthResponseData, AuthService} from "./auth.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AlertComponent} from "../header/shared/alert/alert.component";
import {PlaceholderDirective} from "../header/shared/placeholder.directive";

@Component(
  {
    selector: 'app-auth',
    templateUrl: 'auth.component.html'
  })
export class AuthComponent implements OnDestroy{
  isLogin = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  private colseSub: Subscription;

  constructor(private authService: AuthService, private router:Router,
              private componentFactoryResolver: ComponentFactoryResolver) {
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
          this.showErrorAlert(errorMessage);
          console.log(this.error);
        }
    });
    form.resetForm();
  }
  onHandleError(){
    this.error = null;
  }

  private showErrorAlert(message: string){
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContrainerRef = this.alertHost.viewContainerRef;
    hostViewContrainerRef.clear();

    const componentRef = hostViewContrainerRef.createComponent(alertComponentFactory);
    componentRef.instance.message=message;
    this.colseSub = componentRef.instance.close.subscribe(()=>{
      this.colseSub.unsubscribe();
      hostViewContrainerRef.clear();
    });
  }
  ngOnDestroy() {
    if(this.colseSub){
      this.colseSub.unsubscribe();
    }
  }

}
