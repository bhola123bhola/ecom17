import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { ProductComponent } from './product/product.component';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { BuyerDashboardComponent } from './customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';
import { AdminAuthGaurdService, AdminAuthGuardLogin, BuyerAuthGaurdService, SellerAuthGaurdService, SellerBuyerAuthGuardLogin } from './shared/services/auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },
  { path: 'my-profile', component: UserProfileComponent },
  { path: 'contact-us', component: ContactUsComponent },
  //admin
  {
    path: '',canActivate:[AdminAuthGuardLogin],children: [
      { path: 'admin-login', component: AdminLoginComponent }],
  },
  {
    path: '', canActivate:[AdminAuthGaurdService], children: [
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'admin/user', component: UserCrudComponent },
      { path: 'admin/product', component: ProductComponent }
    ]},
  {path:'',canActivate:[SellerBuyerAuthGuardLogin], children:[
   {path:'sign-in',component:SigninSignupComponent},
   {path:'sign-up',component:SigninSignupComponent}
  ]},
  {path:'',canActivate:[BuyerAuthGaurdService], children:[
   {path:"buyer-dashboard",component:BuyerDashboardComponent},
   {path:"checkout",component:CheckoutComponent}
  ]},
  {path:'',canActivate:[SellerAuthGaurdService],children:[
   {path:"seller-dashboard",component:SellerDashboardComponent},
   {path:"seller/product",component:ProductComponent}
  ]},
  {path:"**",component:PageNotFoundComponent}
];
