import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfilComponent } from './pages/users/profil/profil.component';
import { UpdateComponent } from './pages/users/profil/update/update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, 
      children: [{
        path: 'profil', component: ProfilComponent,
        children: 
          [{ path: 'update', component: UpdateComponent }],
      },
    ],
  },
  //{path:"users/:id", component: UserComponent},
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
