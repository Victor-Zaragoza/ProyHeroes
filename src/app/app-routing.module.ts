import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HistoriaComponent } from './historia/historia.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import {TablaComponent}  from './tabla/tabla.component';
import { TrailersComponent } from './trailers/trailers.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroe/:id',component:UnheroeComponent},
  {path: 'buscador/:nombreh',component: SearchComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'tabla', component: TablaComponent},
  {path: 'trailers', component: TrailersComponent},
  {path: '**',pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
