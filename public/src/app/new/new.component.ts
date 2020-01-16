import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  newAuthor: {};
  error: {};
  constructor(private _httpService: HttpService, private router: Router) {
    this.newAuthor = { author: "" };
  }

  ngOnInit() {}
  onSubmitNewAuthor() {
    console.log(
      `Click event is working with event: ${JSON.stringify(this.newAuthor)}`
    );
    let observable = this._httpService.createAuthor(this.newAuthor);
    observable.subscribe((newAuthor: any) => {
      console.log("Got our new Author!", newAuthor);
      //@ts-ignore
      if (newAuthor.errors) {
        //@ts-ignore
        this.error = newAuthor.errors;
        console.log("Error: ", this.error);
      } else {
        console.log("Author is being created");
        this.newAuthor = { author: "" };
        this.router.navigate(["/"]);
      }
    });
  }
}
