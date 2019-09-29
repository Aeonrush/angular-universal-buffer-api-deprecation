import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-github-user",
  templateUrl: "./github-user.component.html",
  styleUrls: ["./github-user.component.scss"]
})
export class GithubUserComponent implements OnInit {
  user = null;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(params => {
          return this.http
            .get<any>(`https://api.github.com/users/${params.username}`)
            .pipe(catchError(() => of(null)));
        })
      )
      .subscribe(user => (this.user = user));
  }
}
