import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SobreComponent } from './sobre/sobre.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { FriendsComponent } from './friends/friends.component';
import { PostComponent } from './post/post.component';
import { QuitComponent } from './quit/quit.component';

const routes: Routes = [
  { path: '', component: SobreComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pedidos/listar', component: PedidosComponent },
  { path: 'post', component: PostComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'quit', component: QuitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
