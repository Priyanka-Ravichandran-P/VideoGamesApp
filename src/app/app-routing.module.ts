import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'search/:game-search', component: HomePageComponent },
  { path: 'details/:id', component: DetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
