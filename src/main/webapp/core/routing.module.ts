import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**/
import { ForgotPasswordComponent } from '../modules/forgot-password/forgot-password.component';
import { PasswordComponent } from '../modules/password/password.component';
import { SigninComponent } from '../modules/signin/signin.component';
import { SignupComponent } from '../modules/signup/signup.component';
import { ToolbarComponent } from '../modules/toolbar/toolbar.component';
import { UserProfileComponent } from '../modules/userProfile/userProfile.component';
import { ContentComponent } from '../modules/content/content.component';
import { PricingComponent } from '../modules/pricing/pricing.component';

const routes: Routes = [
  {
    path: '',
    component: PricingComponent
  },
  {
   path: 'signup',
    component: SignupComponent
  },
  {
    path: 'createpassword',
    component: PasswordComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },  
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'user',
    component: ToolbarComponent,
    children: [
      {
        path: '',
        component: ContentComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      }
    ]
  },
  {
    path: 'resetpassword',
    component: PasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
