import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private _httpService: HttpService, private router: Router) {}
  authors = [];
  ngOnInit() {
    this.getAuthors();
  }
  getAuthors() {
    let observable = this._httpService.getAll();
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.authors = data["quotes"];
    });
  }
}
