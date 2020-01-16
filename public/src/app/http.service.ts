import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  getAll() {
    return this._http.get("/quotes");
  }
  createAuthor(newAuthor: any) {
    return this._http.post("/quotes", newAuthor);
  }
  getAuthor(id: string) {
    return this._http.get("/quotes/" + id);
  }
  updateAuthor(id: string, quoteToUpdate: any) {
    return this._http.put("/quotes/" + id, quoteToUpdate);
  }
  getQuotes(id: string) {
    return this._http.get("/quotes/all/" + id);
  }
  createQuote(id: string, newQuote) {
    return this._http.post("/quotes/write/" + id, newQuote);
  }
  upvoteQuote(id: string, quoteid: string) {
    return this._http.put("/quotes/" + id + "/" + quoteid + "/upvote", {});
  }
  downvoteQuote(id: string, quoteid: string) {
    return this._http.put("/quotes/" + id + "/" + quoteid + "/downvote", {});
  }
  deleteQuote(id: string, quoteid: string) {
    return this._http.put("/quotes/" + id + "/" + quoteid + "/delete", {});
  }
}
