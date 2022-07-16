import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TCRegisterComponent } from './Components/tcregister/tcregister.component';
import { SearchTCComponent } from './Components/search-tc/search-tc.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthService } from './Security/auth.service';
import { AuthGuard } from './Security/auth.guard';
import { SignupComponent } from './Components/signup/signup.component';
const routes: Routes = [
//   {path:'', component :MainPageComponent,
//   children: [
//     {path:'register', component :TCRegisterComponent},
//   ]
// },
  
  
//   {path:'search', component :SearchTCComponent},
{path:'', redirectTo:'login', pathMatch:'full'},
  {path:'signup', component :SignupComponent},

  {path:'login', component :LoginComponent},
  {path:'TC', component :TCRegisterComponent, canActivate:[AuthGuard]},
  {path:'search', component :SearchTCComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
