import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { TopmoviesComponent } from '../app/topmovies/topmovies.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'topmovies', component: TopmoviesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [BrowserModule, CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    TopmoviesComponent
  ]
})
export class AppRoutingModule { }
