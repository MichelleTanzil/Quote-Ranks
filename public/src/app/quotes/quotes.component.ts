import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  author: {};
  id: string;
  constructor(
    private _httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.author = { author: "", quotes: [] };
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit() {
    this.getAuthor();
  }
  getAuthor() {
    let observable = this._httpService.getAuthor(this.id);
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.author = data;
    });
  }

  onClickUpvoteQuote(quoteid: string) {
    let observable = this._httpService.upvoteQuote(this.id, quoteid);
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.author = data;
    });
    this.getAuthor();
  }
  onClickDownvoteQuote(quoteid: string) {
    let observable = this._httpService.downvoteQuote(this.id, quoteid);
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.author = data;
    });
    this.getAuthor();
  }
  onClickDeleteQuote(quoteid: string) {
    let observable = this._httpService.deleteQuote(this.id, quoteid);
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.author = data;
    });
    this.getAuthor();
  }
}
