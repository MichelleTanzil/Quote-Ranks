import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NewComponent } from './new/new.component';
import { QuotesComponent } from './quotes/quotes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewquoteComponent } from './newquote/newquote.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    QuotesComponent,
    PagenotfoundComponent,
    NewquoteComponent,
    EditAuthorComponent,
    HomeComponent,

  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
