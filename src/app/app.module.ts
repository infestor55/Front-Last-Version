import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CreateNewProductComponent } from './create-new-product/create-new-product.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BabiesShopComponent } from './shops/babies-shop/babies-shop.component';
import { ShopsListComponent } from './shops/shops-list/shops-list.component';
import { KidsShopComponent } from './shops/kids-shop/kids-shop.component';
import { MomsShopComponent } from './shops/moms-shop/moms-shop.component';
import { ChildRearingComponent } from './shops/child-rearing/child-rearing.component';
import { GamesToysComponent } from './shops/games-toys/games-toys.component';
import { FurnitureComponent } from './shops/furniture/furniture.component';

import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { ProductsDashBoardComponent } from './products-dash-board/products-dash-board.component';
import { CategoriesDashBoardComponent } from './categories-dash-board/categories-dash-board.component';
import { UsersListDashBoardComponent } from './users-list-dash-board/users-list-dash-board.component';
import { BlogDashboardComponent } from './blog-dashboard/blog-dashboard.component';
import { AuthorRegisterComponent } from './author-register/author-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlogsDisplayComponent } from './blogs-display/blogs-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbidenComponent,
    FooterComponent,
    CreateNewProductComponent,
    RegisterComponent,
    SidebarComponent,
    BabiesShopComponent,
    ShopsListComponent,
    KidsShopComponent,
    MomsShopComponent,
    ChildRearingComponent,
    GamesToysComponent,
    FurnitureComponent,
    
    AdminSideBarComponent,
    ProductsDashBoardComponent,
    CategoriesDashBoardComponent,
    UsersListDashBoardComponent,
    BlogDashboardComponent,
    AuthorRegisterComponent,
    UserProfileComponent,
    AdminLoginComponent,
    BlogsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
