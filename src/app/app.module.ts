import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { QuitComponent } from './quit/quit.component';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroComponent,
    LoginComponent,
    SobreComponent,
    ProfileComponent,
    FriendsComponent,
    QuitComponent,
    MessageComponent,
    UserComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PostComponent]
})
export class AppModule { }
