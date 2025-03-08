import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { authenticationGuard } from './core/guards/authentication.guard';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { Routes, CanActivateFn } from '@angular/router';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { loggedInGuard } from './core/guards/logged-in.guard';
import path from 'path';

export const routes: Routes = [


  {path:"", component:AuthenticationLayoutComponent, title:"AIK", children:[
    {path:"login", canActivate:[loggedInGuard], loadComponent:()=>import("./pages/login/login.component").then((c)=>c.LoginComponent), title:"Login"},
    {path:"register", canActivate:[loggedInGuard], loadComponent:()=>import("./pages/register/register.component").then((c)=>c.RegisterComponent), title:"Register"},
    {path:"forgetpassword", loadComponent:()=>import("./pages/forgetpassword/forgetpassword.component").then((c)=>c.ForgetpasswordComponent), title:"Forget Password"},
  ]},

  {path:"", component:MainLayoutComponent, title:"AIK", children:[
    {path:"home", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/home/home.component").then((c)=>c.HomeComponent), title:"Home"}, //lazy loadinng for a component
    {path:"categories", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/categories/categories.component").then((c)=>c.CategoriesComponent), title:"Categories"},
    {path:"brands", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/brands/brands.component").then((c)=>c.BrandsComponent), title:"Brands"},
    {path:"product-details/:id", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/product-details/product-details.component").then((c)=>c.ProductDetailsComponent), title:"Details"},
    {path:"cart", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/cart/cart.component").then((c)=>c.CartComponent), title:"Cart"},
    {path:"wishlist", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/wishlist/wishlist.component").then((c)=>c.WishlistComponent), title:"Wishlist"},
    {path:"checkout/:id", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/checkout/checkout.component").then((c)=>c.CheckoutComponent), title:"Checkout"},
    {path:"brands/:id", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/brands/brands.component").then((c)=>c.BrandsComponent), title:"Brands"},
    {path:"categories/:id", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/categories/categories.component").then((c)=>c.CategoriesComponent), title:"Categories"},
    {path:"sub-categories/:id", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/sub-categories/sub-categories.component").then((c)=>c.SubCategoriesComponent), title:"Categories"},
    {path:"sub-brands/:id", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/sub-brands/sub-brands.component").then((c)=>c.SubBrandsComponent), title:"Brands"},
    // {path:"deals", canActivate:[authenticationGuard], loadComponent:()=>import("./pages/deals/deals.component").then((c)=>c.DealsComponent), title:"Deals"},
    // {path:"about", loadComponent:()=>import("./pages/about/about.component").then((c)=>c.AboutComponent), title:"About"},
    // {path:"contact", loadComponent:()=>import("./pages/contact/contact.component").then((c)=>c.ContactComponent), title:"Contact"},

    {path:"**", loadComponent:()=>import("./pages/not-found/not-found.component").then((c)=>c.NotFoundComponent), title:"Not-Found"}
  ]},
];
