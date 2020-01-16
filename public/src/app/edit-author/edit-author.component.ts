import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-author",
  templateUrl: "./edit-author.component.html",
  styleUrls: ["./edit-author.component.css"]
})
export class EditAuthorComponent implements OnInit {
  id: string;
  selectedAuthor = {};
  error: {};

  constructor(
    private _httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.selectedAuthor = { author: "" };
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getAuthor();
  }
  getAuthor() {
    console.log("id is:" + this.id);
    let observable = this._httpService.getAuthor(this.id);
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.selectedAuthor = data;
    });
  }
  onSubmitEditAuthor() {
    console.log(
      `Click event is working with event: ${JSON.stringify(
        this.selectedAuthor
      )}`
    );
    let observable = this._httpService.updateAuthor(
      this.id,
      this.selectedAuthor
    );
    observable.subscribe(updateAuthor => {
      console.log("Got our update Author!", updateAuthor);
      //@ts-ignore
      if (updateAuthor.errors) {
        //@ts-ignore
        this.error = updateAuthor.errors;
        console.log("Errors: ", this.error);
      } else {
        console.log("Author is being updated");
        this.selectedAuthor = { author: "" };
        this.router.navigate(["/"]);
      }
    });
  }
}
