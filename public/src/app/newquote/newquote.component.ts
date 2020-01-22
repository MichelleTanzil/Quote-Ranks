import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-newquote",
  templateUrl: "./newquote.component.html",
  styleUrls: ["./newquote.component.css"]
})
export class NewquoteComponent implements OnInit {
  error: {};
  author: {};
  id: string;
  quote: {}
  constructor(
    private _httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params["id"];
    this.author = { author: "", quotes: [] };
    this.quote = {quote: '', votes: 0}
  }

  ngOnInit() {}
  getAuthor() {
    let observable = this._httpService.getAuthor(this.id);
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.author = data;
    });
  }
  onSubmitNewQuote() {
    console.log(
      `Click event is working with event: ${JSON.stringify(this.author)}}`
    );
    let observable = this._httpService.createQuote(this.id, this.quote);
    observable.subscribe((newQuote) => {
      console.log("Got our new Quote!", newQuote);
      //@ts-ignore
      if (newQuote.errors) {
        //@ts-ignore
        this.error = newQuote.errors;
        console.log("Error: ", this.error);
      } else {
        console.log("Quote is being created");
      }
    });
    this.router.navigate(["/quotes", this.id]);
  }
}
