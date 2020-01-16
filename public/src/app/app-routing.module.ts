import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NewComponent } from "./new/new.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { NewquoteComponent } from "./newquote/newquote.component";
import { EditAuthorComponent } from "./edit-author/edit-author.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent},
  { path: "new", component: NewComponent },
  { path: "authors/:id", component: EditAuthorComponent },
  { path: "quotes/:id", component: QuotesComponent },
  { path: "write/:id", component: NewquoteComponent },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
