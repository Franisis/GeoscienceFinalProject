import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: ArticleComponent},
    {path: '**', redirectTo: ''},
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule { }
