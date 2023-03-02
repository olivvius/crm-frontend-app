import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';
import { LoginRoutingModule } from './login-routing.module';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';

@NgModule({
  declarations: [
    PageSignInComponent,
    PageSignUpComponent,
    PageResetPasswordComponent,
    PageForgotPasswordComponent,
    FormSignUpComponent,
    FormSignInComponent,
  ],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
})
export class LoginModule {}
